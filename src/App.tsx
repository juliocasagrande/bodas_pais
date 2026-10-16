/** App.tsx **/
import { useEffect, useMemo, useState } from 'react'
import {
  ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceArea, PieChart, Pie, Cell
} from 'recharts'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { SHEET_ID, SHEET_NAME, HORIZON_MONTHS, TITLE } from './config'
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


  const allocation = [
    { name: 'Aportes', value: Math.max(0, totals.cumContrib), color: '#2563eb' },
    { name: 'Rendimentos', value: Math.max(0, totals.cumInterest), color: '#16a34a' },
  ]
  const hasAllocation = allocation.some(item => item.value > 0)
  const yieldPercent = totals.cumContrib > 0 ? totals.cumInterest / totals.cumContrib * 100 : 0
  const projectedTotal = fixedProjected.at(-1)?.total ?? totals.total

  return (
    <main className="container">
      <header className="header">
        <div className="eyebrow"><span className="status-dot" /> Planejamento financeiro familiar</div>
        <h1>{TITLE}</h1>
        <p className="subtle">Um fundo para celebrarmos juntos o casamento dos nossos pais.</p>
        <div className="update-line">Dados atualizados até <strong>{updatedAt}</strong></div>
      </header>

      {state === 'loading' && <div role="status" className="notice">Carregando informações da planilha…</div>}
      {state === 'error' && <div role="alert" className="notice notice-error">Não foi possível carregar os dados. Verifique se a planilha está publicada e tente atualizar a página.</div>}

      <section className="summary-grid" aria-label="Resumo do investimento">
        <article className="metric metric-primary">
          <span className="metric-label">Patrimônio acumulado</span>
          <strong className="metric-main">{brl(totals.total)}</strong>
          <span className="metric-detail">Saldo atual do fundo</span>
        </article>
        <article className="metric">
          <span className="metric-label"><span className="metric-dot dot-blue" /> Total aportado</span>
          <strong className="metric-value">{brl(totals.cumContrib)}</strong>
          <span className="metric-detail">Contribuições realizadas</span>
        </article>
        <article className="metric">
          <span className="metric-label"><span className="metric-dot dot-green" /> Rendimentos acumulados</span>
          <strong className="metric-value">{brl(totals.cumInterest)}</strong>
          <span className="metric-detail">Rentabilidade sobre aportes: {yieldPercent.toFixed(2).replace('.', ',')}%</span>
        </article>
      </section>

      <section className="dashboard-grid" aria-label="Indicadores e gráficos">
        <article className="card chart-panel">
          <div className="section-heading">
            <div><span className="section-kicker">Desempenho</span><h2>Evolução do fundo</h2><p>Histórico de aportes, rendimentos e patrimônio.</p></div>
            <span className="pill">{HORIZON_MONTHS / 12} anos</span>
          </div>
          <label className="toggle-line">
            <input type="checkbox" checked={showProjection} onChange={e => setShowProjection(e.target.checked)} />
            <span>Exibir projeção com taxa nominal de 10% a.a.</span>
          </label>
          <div className="chart-area" role="img" aria-label="Gráfico de evolução do fundo">
            {state === 'ok' && chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData} margin={{top: 12, right: 12, bottom: 8, left: 0}} barCategoryGap="28%">
                  <CartesianGrid stroke="#e9edf3" vertical={false} />
                  <XAxis dataKey="date" tickFormatter={tickMMYYYY} tick={{fontSize: 11, fill: '#64748b'}} tickLine={false} axisLine={false} minTickGap={25} />
                  <YAxis width={76} tickFormatter={v => new Intl.NumberFormat('pt-BR',{notation:'compact',maximumFractionDigits:1}).format(Number(v))} tick={{fontSize: 11, fill: '#64748b'}} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{borderRadius:12,border:'1px solid #e5e7eb',boxShadow:'0 10px 30px #0f172a12'}} formatter={(value, name) => [brl(Number(value)), String(name)]} labelFormatter={value => 'Mês: ' + tickMMYYYY(String(value))} />
                  <Legend wrapperStyle={{fontSize:12,paddingTop:12}} />
                  {firstProjectionIndex > 0 && <ReferenceArea x1={chartData[firstProjectionIndex].date} x2={chartData[chartData.length-1].date} fill="#e0e7ff" fillOpacity={0.5} />}
                  <Bar dataKey="monthInterest" name="Juros mensais" fill="#86b9a2" radius={[3,3,0,0]} maxBarSize={18} />
                  <Line type="monotone" dataKey="cumContrib" name="Aportes acumulados" stroke="#2563eb" strokeWidth={2.2} dot={false} />
                  <Line type="monotone" dataKey="cumInterest" name="Rendimentos acumulados" stroke="#16a34a" strokeWidth={2.2} dot={false} />
                  <Line type="monotone" dataKey="total" name="Patrimônio" stroke="#111827" strokeWidth={3} dot={false} activeDot={{r:5}} />
                </ComposedChart>
              </ResponsiveContainer>
            ) : <div className="chart-empty">{state === 'ok' ? 'Nenhum dado disponível.' : 'Aguardando dados…'}</div>}
          </div>
          <p className="chart-note">A região sombreada representa valores projetados, não realizados.</p>
        </article>

        <article className="card allocation-panel">
          <div className="section-heading"><div><span className="section-kicker">Composição</span><h2>De onde vem o saldo?</h2><p>Participação dos aportes e dos rendimentos.</p></div></div>
          <div className="donut-area">
            {hasAllocation ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart><Pie data={allocation} dataKey="value" nameKey="name" innerRadius="67%" outerRadius="88%" paddingAngle={2} stroke="none">
                  {allocation.map(item => <Cell key={item.name} fill={item.color} />)}
                </Pie><Tooltip formatter={value => brl(Number(value))} /></PieChart>
              </ResponsiveContainer>
            ) : <div className="chart-empty">Sem valores disponíveis</div>}
            {hasAllocation && <div className="donut-center"><span>Saldo total</span><strong>{brl(totals.total)}</strong></div>}
          </div>
          <div className="allocation-legend">
            {allocation.map(item => <div className="legend-row" key={item.name}><span><i style={{background:item.color}} />{item.name}</span><strong>{brl(item.value)}</strong></div>)}
          </div>
          <div className="projection-tile"><span>Saldo ao final da projeção</span><strong>{brl(projectedTotal)}</strong><small>{HORIZON_MONTHS / 12} anos · cenário ilustrativo de 10% a.a.</small></div>
        </article>
      </section>
      <footer className="method"><strong>Metodologia:</strong> o histórico é calculado a partir dos saldos e aportes da planilha. A projeção usa taxa nominal fixa de 10% a.a. dividida em 12 meses e o aporte médio histórico. Não é uma garantia de retorno.</footer>
    </main>
  )
}
