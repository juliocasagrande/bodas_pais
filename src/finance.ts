// finance.ts
export type Row = {
  date: Date
  saldo?: number | null
  rendimento_percent?: number | string | null // pode vir 0.8, "0,8", "0,8%", "0.8%"
  aportes: Record<string, number>            // chaves "aporte_*"
}

export type Point = {
  date: string        // "YYYY-MM"
  monthContrib: number
  monthInterest: number
  cumContrib: number
  cumInterest: number
  total: number       // saldo
  isProjection: boolean
}

export function parseNumber(v: any): number {
  if (v === null || v === undefined) return 0
  // remove milhar '.' e troca vírgula por ponto
  const s = String(v).trim().replace(/\./g, '').replace(',', '.').replace(/\s/g, '')
  const n = Number(s)
  return Number.isFinite(n) ? n : 0
}

function toYYYYMM(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

function normalizePercent(p: any): number {
  // aceita 0.8, "0,8", "0,8%", "0.8%", 1.2 (=> 1.2%)
  if (p === null || p === undefined) return NaN
  const s = String(p).trim()
  const hasPct = s.includes('%')
  const n = parseNumber(s.replace('%', ''))
  if (!Number.isFinite(n)) return NaN
  const asUnit = hasPct ? n / 100 : (n > 1.5 ? n / 100 : n) // 0.8 => 0.8, 1.2 => 0.012
  return asUnit
}

function sum(obj: Record<string, number>): number {
  return Object.values(obj).reduce((a, b) => a + (Number.isFinite(b) ? b : 0), 0)
}

function trimmedMean(values: number[], trim = 0.1): number {
  const v = values.filter(Number.isFinite).slice().sort((a, b) => a - b)
  if (!v.length) return NaN
  const k = Math.floor(v.length * trim)
  const cut = v.slice(k, v.length - k || v.length)
  return cut.reduce((a, b) => a + b, 0) / cut.length
}

function geomMean1p(values: number[]): number {
  const v = values.filter((x) => Number.isFinite(x) && x > -0.95) // evita (1+r)<=0
  if (!v.length) return NaN
  const prod = v.reduce((acc, r) => acc * (1 + r), 1)
  return Math.pow(prod, 1 / v.length) - 1
}

export function brl(n: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n || 0)
}

export function buildSeries(rows: Row[], horizonMonths: number): { points: Point[] } {
  if (!rows?.length) return { points: [] }

  // ordena por mês
  const ordered = rows.slice().sort((a, b) => a.date.getTime() - b.date.getTime())

  let prevSaldo = 0
  let cumContrib = 0
  let cumInterest = 0
  const points: Point[] = []

  const realizedRates: number[] = []
  const realizedContribs: number[] = []

  for (const r of ordered) {
    const ym = toYYYYMM(r.date)
    const aporteMes = sum(r.aportes)
    let saldo = Number.isFinite(r.saldo as number) ? (r.saldo as number) : NaN

    let monthInterest: number

    if (Number.isFinite(saldo)) {
      // regra 1: se veio saldo, juros = saldo − saldo_prev − aporte
      monthInterest = saldo - prevSaldo - aporteMes
    } else {
      // regra 2: sem saldo, usar rendimento_percent (normalizado)
      const rate = normalizePercent(r.rendimento_percent)
      const j = Number.isFinite(rate) ? prevSaldo * rate : 0
      monthInterest = j
      saldo = prevSaldo + aporteMes + j
    }

    // guarda taxa realizada para projeção (sobre saldo anterior)
    if (prevSaldo > 0) {
      const rate = monthInterest / prevSaldo
      if (Number.isFinite(rate)) realizedRates.push(rate)
    }
    if (aporteMes > 0) realizedContribs.push(aporteMes)

    cumContrib += aporteMes
    cumInterest += monthInterest
    prevSaldo = saldo

    points.push({
      date: ym,
      monthContrib: aporteMes,
      monthInterest: monthInterest,
      cumContrib,
      cumInterest,
      total: saldo,
      isProjection: false
    })
  }

  // ===== Projeção =====
  const already = points.length
  const want = Math.max(0, horizonMonths - already)
  if (want > 0 && points.length) {
    // taxa mensal pela média geométrica (com cap para outliers)
    let rGeo = geomMean1p(realizedRates)
    const rTrim = trimmedMean(realizedRates)
    // fallback: se geom falhar, usa média aparada
    if (!Number.isFinite(rGeo)) rGeo = rTrim
    // limitações para evitar explosões
    const CAP = 0.05  // ±5% a.m. (ajuste se quiser)
    if (Number.isFinite(rGeo)) {
      rGeo = Math.max(-CAP, Math.min(CAP, rGeo))
    } else {
      rGeo = 0
    }

    // aporte médio aparado
    let aporteMedio = trimmedMean(realizedContribs)
    if (!Number.isFinite(aporteMedio)) aporteMedio = 0

    let saldo = points[points.length - 1].total
    let cc = points[points.length - 1].cumContrib
    let ci = points[points.length - 1].cumInterest

    // a partir do último mês real
    const last = new Date(ordered[ordered.length - 1].date)
    let y = last.getFullYear()
    let m = last.getMonth() + 1

    for (let i = 0; i < want; i++) {
      // próximo mês
      m += 1
      if (m > 12) { m = 1; y += 1 }
      const ym = `${y}-${String(m).padStart(2, '0')}`

      const juros = saldo * rGeo
      const total = saldo + aporteMedio + juros

      cc += aporteMedio
      ci += juros
      saldo = total

      points.push({
        date: ym,
        monthContrib: aporteMedio,
        monthInterest: juros,
        cumContrib: cc,
        cumInterest: ci,
        total,
        isProjection: true
      })
    }
  }

  return { points }
}
