import { useState } from 'react'

const fmt = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 })

function num(v: string) {
  const d = v.replace(/[^0-9]/g, '')
  return d ? parseInt(d, 10) : 0
}

function formatear(v: string) {
  const n = num(v)
  return n ? fmt.format(n) : ''
}

export function ImpactCalculator() {
  const [ha, setHa] = useState('50')
  const [gasto, setGasto] = useState('2.500.000')
  const [pct, setPct] = useState(10)

  const ahorro = Math.round((num(ha) * num(gasto) * pct) / 100)

  return (
    <form className="tarjeta calculadora" id="calculadora" aria-labelledby="calc-titulo" onSubmit={(e) => e.preventDefault()}>
      <h3 id="calc-titulo" className="display-m">Calcula tu ahorro en fertilización</h3>
      <div className="campo">
        <label htmlFor="calc-ha">Hectáreas</label>
        <div className="entrada-num">
          <input
            id="calc-ha"
            name="ha"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={ha}
            onChange={(e) => setHa(e.target.value)}
            onBlur={() => setHa(formatear(ha))}
          />
          <span>ha</span>
        </div>
      </div>
      <div className="campo">
        <label htmlFor="calc-gasto">Gasto en fertilización por hectárea al año</label>
        <div className="entrada-num">
          <input
            id="calc-gasto"
            name="gasto"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={gasto}
            onChange={(e) => setGasto(e.target.value)}
            onBlur={() => setGasto(formatear(gasto))}
          />
          <span>COP/ha·año</span>
        </div>
        <span className="ayuda">Valor de ejemplo. Cámbialo por el tuyo.</span>
      </div>
      <div className="campo">
        <label htmlFor="calc-pct">
          Ahorro por aplicar solo donde hace falta: <b>{pct} %</b>
        </label>
        <input
          id="calc-pct"
          name="pct"
          type="range"
          min="5"
          max="40"
          step="1"
          value={pct}
          onChange={(e) => setPct(parseInt(e.target.value, 10) || 0)}
        />
        <span className="ayuda">
          10 % es lo medido en cultivos extensos con la plataforma. Mueve la barra para ver otros escenarios.
        </span>
      </div>
      <div className="resultado" aria-live="polite">
        <span className="etiqueta">Ahorro estimado al año</span>
        <output id="calc-out" htmlFor="calc-ha calc-gasto calc-pct">
          COP {fmt.format(ahorro)}
        </output>
        <p>Es una estimación con tus datos, no una cotización.</p>
      </div>
    </form>
  )
}
