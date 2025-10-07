/** App.tsx **/
import { useEffect, useMemo, useState } from 'react'
import {
  ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceArea
} from 'recharts'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { SHEET_ID, SHEET_NAME, HORIZON_MONTHS, TITLE, COLORS } from './config'
import type { Row } from './finance'
import { buildSeries, brl, parseNumber } from './finance'

type FetchState = 'idle'|'loading'|'ok'|'error'

dayjs.locale('pt-br')

/* ===== Utils ===== */
function formatMesAnoBR(d: Date | undefined): string {
  if (!d || isNaN(d.getTime())) return '—'
  const s = dayjs(d).format('MMMM/YYYY')
  return s.charAt(0).toUpperCase() + s.slice(1)
}
function tickMMYYYY(ym: string): string {
  if (!ym) return ''
  const [y, m] = ym.split('-')
  return `${m}/${y}`
}
function nextYM(ym: string): string {
  const [y, m] = ym.split('-').map(Number)
  const nm = m + 1
  if (nm > 12) return `${y + 1}-01`
  return `${y}-${String(nm).padStart(2, '0')}`
}
function mean(nums: number[]) {
  const v = nums.filter(n => Number.isFinite(n))
  if (!v.length) return 0
  return v.reduce((a,b)=>a+b,0) / v.length
}

/* ===== Projeção fixa 10% a.a. ===== */
const YEAR_RATE = 0.10
const MONTH_RATE = YEAR_RATE / 12

type Point = {
  date: string
  monthContrib: number
  monthInterest: number
  cumContrib: number
  cumInterest: number
  total: number
  isProjection: boolean
}

function rebuildProjectionFixedRate(realized: Point[], horizonMonths: number): Point[] {
  const out: Point[] = [...realized]
  if (!realized.length) return out
  const monthsToGo = Math.max(0, horizonMonths - realized.length)
  if (monthsToGo === 0) return out

  const aporteMedio = mean(realized.map(p => p.monthContrib))
  let { total: saldo, cumContrib: cc, cumInterest: ci } = realized[realized.length - 1]
  let ym = realized[realized.length - 1].date

  for (let i=0;i<monthsToGo;i++){
    ym = nextYM(ym)
    const juros = saldo * MONTH_RATE
    const total = saldo + aporteMedio + juros
    cc += aporteMedio
    ci += juros
    saldo = total
    out.push({
      date: ym,
      monthContrib: aporteMedio,
      monthInterest: juros,
      cumContrib: cc,
      cumInterest: ci,
      total,
      isProjection: true
    })
  }
  return out
}

/* ====== Parse robusto da data do gviz (pt-BR OK) ====== */
function parseSheetDate(v: any, f: any): Date {
  // 1) Preferir "v" como Date(YYYY,MM,DD)
  if (typeof v === 'string' && v.startsWith('Date(')) {
    const m = v.match(/Date\((\d+),\s*(\d+),\s*(\d+)\)/)
    if (m) return new Date(Number(m[1]), Number(m[2]), Number(m[3]))
  }
  // 2) Serial numérico (Excel)
  if (typeof v === 'number') {
    return new Date(Math.round((v - 25569) * 86400 * 1000))
  }
  // 3) String formatada "f": tentar dd/MM/yyyy, yyyy-MM-dd, MM/dd/yyyy
  const s = String(f ?? v ?? '').trim()
  if (s) {
    let m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/) // dd/MM/yyyy
    if (m) return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]))
    m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/) // yyyy-MM-dd
    if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
    m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/) // MM/dd/yyyy (fallback)
    if (m) return new Date(Number(m[3]), Number(m[1]) - 1, Number(m[2]))
  }
  // 4) Último recurso
  const d = new Date(s)
  return isNaN(d.getTime()) ? new Date() : d
}

/**
 * Lê a aba publicada via Google Visualization API (JSON "gviz")
 * URL: https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:json&sheet={SHEET_NAME}
 */
async function fetchRows(sheetId: string, sheetName: string): Promise<Row[]>{
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) throw new Error('Falha ao ler planilha')
  const txt = await res.text()

  // Remove wrapper do gviz
  const json = JSON.parse(txt.substring(txt.indexOf('(')+1, txt.lastIndexOf(')')))
  const cols: string[] = json.table.cols.map((c:any)=> (c.label || c.id || '').toString().trim())
  const rows: Row[] = []

  for (const r of json.table.rows){
    const obj: Record<string, any> = {}
    r.c?.forEach((c:any, i:number) => {
      const key = (cols[i] || '').toString().trim()
      const v = c?.v ?? null
      const f = c?.f ?? null

      if (key.toLowerCase() === 'date'){
        obj[key] = parseSheetDate(v, f)
      } else {
        obj[key] = v ?? f ?? null
      }
    })

    // Monta estrutura com aportes*
    const aportes: Record<string, number> = {}
    Object.keys(obj).forEach(k=>{
      if (k.toLowerCase().startsWith('aporte_')){
        aportes[k] = parseNumber(obj[k]) ?? 0
      }
    })

    rows.push({
      date: obj['date'] ? new Date(obj['date']) : new Date(),
      saldo: parseNumber(obj['saldo']),
      rendimento_percent: obj['rendimento_percent'],
      aportes
    })
  }
  // filtra linhas sem data válida
  return rows.filter(r=>!isNaN(r.date.getTime()))
}

/* ==== Carrega Google Font (Poppins) pro título bonito ==== */
function useGoogleFont() {
  useEffect(() => {
    const id = 'gf-poppins'
    if (document.getElementById(id)) return
    const link = document.createElement('link')
    link.id = id
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap'
    document.head.appendChild(link)
  }, [])
}

export default function App(){
  useGoogleFont()

  const [state, setState] = useState<FetchState>('idle')
  const [rows, setRows] = useState<Row[]>([])
  const [showProjection, setShowProjection] = useState(false)

  useEffect(()=>{
    setState('loading')
    fetchRows(SHEET_ID, SHEET_NAME)
      .then(r=>{ setRows(r); setState('ok') })
      .catch(_=> setState('error'))
  },[])

  // Série real (constrói YYYY-MM corretamente)
  const computed = useMemo(()=> buildSeries(rows, HORIZON_MONTHS), [rows])
  const realized = useMemo(()=> computed.points.filter(p=>!p.isProjection), [computed])

  // Projeção fixa 10% a.a.
  const fixedProjected = useMemo(()=> rebuildProjectionFixedRate(realized as any, HORIZON_MONTHS), [realized])

  const chartData = useMemo(()=> showProjection ? fixedProjected : realized, [fixedProjected, realized, showProjection])

  const firstProjectionIndex = useMemo(()=>{
    if (!showProjection) return -1
    return chartData.findIndex(p=>p.isProjection)
  }, [chartData, showProjection])

  const lastReal = realized.at(-1) as any
  const totals = lastReal ? {
    total: lastReal.total,
    cumContrib: lastReal.cumContrib,
    cumInterest: lastReal.cumInterest
  } : { total:0, cumContrib:0, cumInterest:0 }

  // Última atualização "Mês/AAAA" usando o mês real mais recente
  const updatedAt = lastReal?.date ? formatMesAnoBR(dayjs(`${lastReal.date}-01`).toDate()) : '—'

  return (
    <div className="container">
      {/* Título com Poppins */}
      <div className="header">
        <h1 style={{ fontFamily: `'Poppins', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`, letterSpacing: '.2px' }}>
          {TITLE}
        </h1>
        <div className="subtle">Investimento para comemorarmos o casamento dos nossos pais! 😎💕</div>
      </div>

      {/* KPIs */}
      <div className="row" style={{margin:'12px 0'}}>
        <div className="kpi" style={{ padding: 0, borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ backgroundColor: 'var(--pastel1)', color: '#202225', fontWeight: 700, padding: '6px 10px', fontSize: '0.85rem' }}>Total acumulado</div>
          <div style={{ padding: '8px 10px', fontWeight: 800, fontSize: '1.1rem' }}>{brl(totals.total)}</div>
        </div>
        <div className="kpi" style={{ padding: 0, borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ backgroundColor: 'var(--pastel3)', color: '#202225', fontWeight: 700, padding: '6px 10px', fontSize: '0.85rem' }}>Acumulado dos aportes</div>
          <div style={{ padding: '8px 10px', fontWeight: 800, fontSize: '1.1rem' }}>{brl(totals.cumContrib)}</div>
        </div>
        <div className="kpi" style={{ padding: 0, borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ backgroundColor: 'var(--pastel4)', color: '#202225', fontWeight: 700, padding: '6px 10px', fontSize: '0.85rem' }}>Acumulado de juros</div>
          <div style={{ padding: '8px 10px', fontWeight: 800, fontSize: '1.1rem' }}>{brl(totals.cumInterest)}</div>
        </div>
      </div>

      {/* Card do gráfico estilo KPI */}
      <div className="card" style={{ marginTop:12, padding:12 }}>
        <div style={{
          background: 'var(--pastel5)',
          color: '#202225',
          fontWeight: 800,
          padding: '6px 10px',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <span style={{ fontSize: '.95rem' }}>Evolução do fundo</span>
          <span style={{ padding: '4px 10px', background: 'rgba(255,255,255,.7)', borderRadius: 999, fontSize: '.8rem', fontWeight: 700 }}>10 anos</span>
        </div>

        <div className="toolbar" style={{ display:'flex', gap:10, flexWrap:'wrap', alignItems:'center' }}>
          <span className="chip" style={{ backgroundColor: 'var(--pastel2)', color:'#202225', borderRadius:999, padding:'6px 10px', fontWeight:600 }}>
            Última atualização: {updatedAt}
          </span>
          <label className="chip" style={{ backgroundColor: 'var(--pastel2)', color:'#202225', borderRadius:999, padding:'6px 10px', fontWeight:600, display:'inline-flex', alignItems:'center', gap:8, cursor:'pointer' }}>
            <input type="checkbox" checked={showProjection} onChange={()=>setShowProjection(v=>!v)} style={{ width:18, height:18 }} />
            <span>Exibir projeção de {HORIZON_MONTHS/12} anos (10% a.a.)</span>
          </label>
        </div>

        <div style={{width:'100%', height:400}}>
          {state==='loading' && <div className="subtle">Carregando dados…</div>}
          {state==='error' && <div className="subtle">Não foi possível ler a planilha. Verifique se está publicada.</div>}
          {state==='ok' && (
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={chartData as any}
                margin={{ top: 16, right: 32, bottom: 12, left: 12 }}
                barCategoryGap="24%"
                barGap={4}
              >
                <CartesianGrid stroke="#eef2f7" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 12 }}
                  padding={{ left: 28, right: 28 }}
                  tickFormatter={tickMMYYYY}   // MM/AAAA correto
                />
                <YAxis
                  tickFormatter={v=>brl(v).replace('R$','R$ ')}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  formatter={(v:any, name:any)=>{
                    const map: Record<string,string> = {
                      monthContrib:'Aporte do mês',
                      monthInterest:'Juros do mês',
                      cumContrib:'Ac. Aportado',
                      cumInterest:'Ac. Juros',
                      total:'Total'
                    }
                    return [brl(v as number), map[name] || name]
                  }}
                  labelFormatter={(l)=>`Mês: ${tickMMYYYY(String(l))}`}
                />
                <Legend />
                {firstProjectionIndex>0 && (
                  <ReferenceArea
                    x1={(chartData as any)[firstProjectionIndex].date}
                    x2={(chartData as any).at(-1)!.date}
                    fill={COLORS.projection}
                    fillOpacity={0.12}
                  />
                )}
                <Bar dataKey="monthInterest" name="Juros do mês" fill={COLORS.barInterest} />
                <Line type="monotone" dataKey="cumContrib" name="Ac. Aportado" stroke={COLORS.lineCumContrib} strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="cumInterest" name="Ac. Juros" stroke={COLORS.lineCumInterest} strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="total" name="Total" stroke={COLORS.lineTotal} strokeWidth={3} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="footer">
          <div><strong>Como calculamos:</strong> os meses reais seguem a regra do saldo/rendimento. A <em>projeção</em> foi recalculada aqui com taxa fixa de <strong>10% ao ano</strong> (≈ 0,833% a.m.) e com <em>aporte médio</em> dos meses reais.</div>
        </div>
      </div>
    </div>
  )
}
