import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { IcoCheck, IcoFuego, IcoGotas } from './Icons'

type Capa = {
  id: string
  num: string
  nombre: string
  verbo: string
  definicion: string
  puntos: string[]
  reemplaza: string
  visual: ReactNode
}

function Esquinas() {
  return (
    <>
      <span className="esq si"></span>
      <span className="esq sd"></span>
      <span className="esq ii"></span>
      <span className="esq id"></span>
    </>
  )
}

function Sello({ hash }: { hash: string }) {
  return (
    <span className="ok">
      <IcoCheck /> {hash}
    </span>
  )
}

const CAPAS: Capa[] = [
  {
    id: 'datos',
    num: '01',
    nombre: 'Data y estadísticas',
    verbo: 'Ordena.',
    definicion: 'Todos los datos de tu operación en un solo lugar, con estadísticas por lote, cultivo y temporada.',
    puntos: [
      'Labores, insumos, análisis de laboratorio, costos, clima y producción en una sola base.',
      'Formularios y fotos georreferenciadas desde el celular. Tus archivos de Excel también entran.',
      'Rendimiento, costo por hectárea e insumos aplicados, comparados entre lotes y temporadas.',
    ],
    reemplaza: 'el Excel, los cuadernos de campo, las agendas y el WhatsApp del mayordomo. La industria agro merece algo mejor.',
    visual: (
      <figure className="marco" style={{ margin: 0 }}>
        <Esquinas />
        <span className="rotulo arriba">TEMPORADA 2026A · RESUMEN POR LOTE</span>
        <div className="bitacora">
          <div className="tabla-scroll">
            <table className="bitacora-tabla">
              <caption className="sr-only">Ejemplo de estadísticas por lote</caption>
              <thead>
                <tr>
                  <th scope="col">Lote</th>
                  <th scope="col">Cultivo</th>
                  <th scope="col" className="n">Rend. t/ha</th>
                  <th scope="col" className="n">Fert. kg/ha</th>
                  <th scope="col" className="n ocultable">COP/ha</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['12', 'Palma', '24,6', '410', '3,1 M'],
                  ['14', 'Palma', '21,2', '455', '3,4 M'],
                  ['07', 'Cacao', '0,9', '180', '2,2 M'],
                  ['03', 'Café', '1,6', '320', '4,0 M'],
                ].map(([lote, cultivo, rend, fert, cop]) => (
                  <tr key={lote}>
                    <td className="mono">{lote}</td>
                    <td>{cultivo}</td>
                    <td className="n">{rend}</td>
                    <td className="n">{fert}</td>
                    <td className="n ocultable">{cop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bitacora-pie">
            <span className="etq-noche">Datos de ejemplo</span>
            <span className="etq-noche">Importa desde Excel</span>
          </div>
        </div>
      </figure>
    ),
  },
  {
    id: 'traza',
    num: '02',
    nombre: 'Trazabilidad',
    verbo: 'Demuestra.',
    definicion:
      'Trazabilidad para reducir la huella de carbono y probarlo, con registros en blockchain para la certificación europea EUDR.',
    puntos: [
      'Cada labor e insumo queda con fecha, responsable, foto y coordenadas, del lote al despacho.',
      'Huella de carbono por lote y por producto (fertilizantes, combustible y energía) para bajarla ciclo a ciclo.',
      'Registros sellados en blockchain: nadie los puede cambiar después.',
      'Polígonos georreferenciados y verificación de cero deforestación desde el 31 de diciembre de 2020, como pide el reglamento europeo EUDR.',
    ],
    reemplaza: 'carpetas y certificados que el comprador no puede verificar.',
    visual: (
      <figure className="marco" style={{ margin: 0 }}>
        <Esquinas />
        <span className="rotulo arriba">BITÁCORA · LOTE 14</span>
        <div className="bitacora">
          <div className="tabla-scroll">
            <table className="bitacora-tabla">
              <caption className="sr-only">Ejemplo de bitácora con huella de carbono y sello en blockchain</caption>
              <thead>
                <tr>
                  <th scope="col" className="ocultable">Fecha</th>
                  <th scope="col">Labor</th>
                  <th scope="col" className="n">kg CO₂e</th>
                  <th scope="col" className="u">Sello</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['2026-09-18', 'Fertilización, zona norte', '412', '0x8f3a…c21'],
                  ['2026-09-12', 'Muestreo de suelo', '6', '0x41be…7d0'],
                  ['2026-09-05', 'Control de arvenses', '38', '0x9c07…e5a'],
                  ['2026-08-29', 'Aplicación foliar', '21', '0x2d6f…b18'],
                ].map(([fecha, labor, co2, hash]) => (
                  <tr key={fecha}>
                    <td className="mono ocultable">{fecha}</td>
                    <td>{labor}</td>
                    <td className="n">{co2}</td>
                    <td><Sello hash={hash} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bitacora-pie">
            <span className="etq-noche">Datos de ejemplo</span>
            <span className="etq-noche">Sin deforestación desde 2020-12-31</span>
            <span className="etq-noche">Listo para EUDR</span>
          </div>
        </div>
      </figure>
    ),
  },
  {
    id: 'alertas',
    num: '03',
    nombre: 'Alertas tempranas',
    verbo: 'Detecta.',
    definicion:
      'Información del suelo e imágenes satelitales espectrales para saber qué le está pasando a tu cultivo, tu proyecto ambiental o tu bosque, antes de que se vea.',
    puntos: [
      'Análisis de suelo cruzado con Sentinel-2, PlanetScope y radar.',
      'Alertas de estrés hídrico, pérdida de vigor, plagas, incendios forestales y deforestación.',
      'Cada alerta dice dónde, desde cuándo y qué revisar.',
    ],
    reemplaza: 'enterarte cuando el daño ya se ve desde la carretera.',
    visual: (
      <figure className="marco" style={{ margin: 0, aspectRatio: '4 / 4.4' }}>
        <img
          src="/img/terreno.webp"
          alt="Relieve andino con capas de cobertura vegetal y curvas de nivel"
          width="800"
          height="1080"
          loading="lazy"
        />
        <Esquinas />
        <span className="rotulo arriba">SUELO + SATÉLITE + CAMPO</span>
        <span className="chip critica chip-flotante" style={{ right: 28, top: 96 }}>
          <IcoFuego /> Crítica · incendio activo
        </span>
        <span className="chip atencion chip-flotante" style={{ left: 28, top: '46%' }}>
          <IcoGotas /> Atención · estrés hídrico
        </span>
        <span className="chip orden chip-flotante" style={{ right: 28, bottom: 64 }}>
          <IcoCheck /> En orden · lote 12
        </span>
        <figcaption className="rotulo abajo">Ilustración · alertas de ejemplo</figcaption>
      </figure>
    ),
  },
  {
    id: 'pred',
    num: '04',
    nombre: 'Predicción',
    verbo: 'Anticipa.',
    definicion: 'Predicción de propiedades y fenómenos para mejorar la producción y decidir mejor el próximo ciclo.',
    puntos: [
      'Propiedades del suelo y producción esperada por zona del lote.',
      'Riesgo climático y de El Niño, con tiempo para prepararse.',
      'Modelos calibrados con muestreos en suelos colombianos.',
    ],
    reemplaza: 'decidir el próximo ciclo con la intuición del anterior.',
    visual: (
      <figure className="marco" style={{ margin: 0 }}>
        <Esquinas />
        <span className="rotulo arriba">PRESCRIPCIÓN POR ZONAS · EJEMPLO</span>
        <div className="zonas">
          <svg viewBox="0 0 520 300" role="img" aria-labelledby="zonas-t">
            <title id="zonas-t">
              Lote dividido en zonas: la zona norte recibe 40 % más de abono y la zona sur no se abona este ciclo
            </title>
            <defs>
              <clipPath id="lote">
                <path d="M40 40 L470 20 L500 150 L455 280 L60 270 L20 150 Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#lote)">
              <rect x="0" y="0" width="520" height="300" fill="#1f8f6a" />
              <path d="M0 0 H520 V95 C420 120 300 70 180 105 C110 125 50 100 0 115 Z" fill="#d9711c" />
              <path
                d="M0 115 C50 100 110 125 180 105 C300 70 420 120 520 95 V150 C400 175 260 130 150 165 C90 182 40 160 0 170 Z"
                fill="#f2c14e"
              />
              <path
                d="M0 170 C40 160 90 182 150 165 C260 130 400 175 520 150 V215 C380 230 240 200 120 225 C70 235 30 225 0 230 Z"
                fill="#8fcb6b"
              />
              <g fill="none" stroke="rgba(7,13,14,.35)" strokeWidth="1">
                <path d="M0 60 H520 M0 120 H520 M0 180 H520 M0 240 H520 M104 0 V300 M208 0 V300 M312 0 V300 M416 0 V300" />
              </g>
            </g>
            <path d="M40 40 L470 20 L500 150 L455 280 L60 270 L20 150 Z" fill="none" stroke="#32d9c3" strokeWidth="2" />
            <g fontFamily="IBM Plex Mono, monospace" fontSize="13" fontWeight="500">
              <rect x="150" y="48" width="236" height="28" rx="6" fill="rgba(7,13,14,.82)" />
              <text x="162" y="67" fill="#ff9a57">ZONA NORTE · +40 % abono</text>
              <rect x="150" y="226" width="246" height="28" rx="6" fill="rgba(7,13,14,.82)" />
              <text x="162" y="245" fill="#32d9c3">ZONA SUR · omitir este ciclo</text>
            </g>
          </svg>
          <div className="leyenda" aria-label="Leyenda de vigor NDRE">
            <div className="barra-v" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
            <div className="marcas"><span>NDRE 0,10</span><span>0,20</span><span>0,30</span><span>0,40</span><span>0,50</span></div>
          </div>
        </div>
      </figure>
    ),
  },
  {
    id: 'geo',
    num: '05',
    nombre: 'Agrogeofísica',
    verbo: 'Mira debajo del lote.',
    definicion: 'La geofísica que usamos 25 años en hidrocarburos, aplicada al suelo agrícola.',
    puntos: [
      'Mediciones desde la superficie, como resistividad y conductividad eléctrica, para ver el suelo en profundidad sin abrir calicatas en todo el lote.',
      'Mapas de textura, humedad, compactación, profundidad efectiva y agua subterránea.',
      'Muestreo dirigido a donde más informa y modelos de predicción mejor calibrados.',
    ],
    reemplaza: 'suponer que el lote es parejo debajo de la superficie.',
    visual: (
      <figure className="marco" style={{ margin: 0 }}>
        <Esquinas />
        <span className="rotulo arriba">SECCIÓN DE RESISTIVIDAD · EJEMPLO</span>
        <div className="zonas">
          <svg viewBox="0 0 520 300" role="img" aria-labelledby="geo-t">
            <title id="geo-t">
              Sección del subsuelo de un lote, de 0 a 100 metros de largo y 0 a 10 metros de profundidad, con una zona
              húmeda de baja resistividad y una capa compacta de alta resistividad
            </title>
            <defs>
              <clipPath id="sec">
                <rect x="56" y="20" width="440" height="230" />
              </clipPath>
            </defs>
            <g clipPath="url(#sec)">
              <rect x="56" y="20" width="440" height="230" fill="#4fcfb3" />
              <path d="M56 20 H496 V58 C430 64 380 50 300 60 C220 70 140 52 56 62 Z" fill="#e9c24e" />
              <path
                d="M56 62 C140 52 220 70 300 60 C380 50 430 64 496 58 V84 C420 92 360 78 280 90 C200 100 120 84 56 92 Z"
                fill="#d9711c"
              />
              <path d="M56 150 C120 140 170 175 240 168 C310 160 360 130 496 140 V250 H56 Z" fill="#2b8cb3" />
              <path
                d="M150 196 C190 176 250 180 300 196 C340 210 330 236 280 240 C220 246 160 236 150 222 C144 212 144 202 150 196 Z"
                fill="#1c4f8f"
              />
            </g>
            <rect x="56" y="20" width="440" height="230" fill="none" stroke="#22312f" />
            <g fontFamily="IBM Plex Mono, monospace" fontSize="13" fill="#9db0ae">
              <text x="52" y="24" textAnchor="end">0 m</text>
              <text x="52" y="139" textAnchor="end">5 m</text>
              <text x="52" y="254" textAnchor="end">10 m</text>
              <text x="56" y="270" textAnchor="start">0</text>
              <text x="276" y="270" textAnchor="middle">50</text>
              <text x="496" y="270" textAnchor="end">100 m</text>
            </g>
            <g fontFamily="IBM Plex Mono, monospace" fontSize="13" fontWeight="500">
              <rect x="330" y="64" width="146" height="26" rx="6" fill="rgba(7,13,14,.85)" />
              <text x="340" y="82" fill="#ff9a57">CAPA COMPACTA</text>
              <rect x="296" y="208" width="130" height="26" rx="6" fill="rgba(7,13,14,.85)" />
              <text x="306" y="226" fill="#7eb6ff">ZONA HÚMEDA</text>
            </g>
          </svg>
          <div className="leyenda" aria-label="Leyenda de resistividad, de 10 a 1000 ohmios metro">
            <div className="barra-v res" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
            <div className="marcas"><span>10 Ω·m</span><span>30</span><span>100</span><span>300</span><span>1000</span></div>
          </div>
        </div>
      </figure>
    ),
  },
]

function capaDesdeHash(hash: string) {
  const id = hash.startsWith('#tab-') ? hash.slice(5) : ''
  return CAPAS.some((c) => c.id === id) ? id : null
}

export function PlatformTabs() {
  const { hash } = useLocation()
  const [activa, setActiva] = useState(() => capaDesdeHash(hash) ?? CAPAS[0].id)
  const [hashPrevio, setHashPrevio] = useState(hash)
  const tabsRef = useRef<Record<string, HTMLButtonElement | null>>({})

  // Enlaces del pie (#tab-datos, #tab-traza…) abren la capa correspondiente
  if (hash !== hashPrevio) {
    setHashPrevio(hash)
    const id = capaDesdeHash(hash)
    if (id) setActiva(id)
  }

  useEffect(() => {
    if (capaDesdeHash(hash)) document.getElementById('plataforma')?.scrollIntoView()
  }, [hash])

  const activar = (id: string, foco = false) => {
    setActiva(id)
    const tab = tabsRef.current[id]
    const lista = tab?.parentElement
    if (tab && lista && lista.scrollWidth > lista.clientWidth) lista.scrollLeft = tab.offsetLeft - 16
    if (foco) tab?.focus()
  }

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    let n: number | null = null
    if (e.key === 'ArrowRight') n = (i + 1) % CAPAS.length
    if (e.key === 'ArrowLeft') n = (i - 1 + CAPAS.length) % CAPAS.length
    if (e.key === 'Home') n = 0
    if (e.key === 'End') n = CAPAS.length - 1
    if (n !== null) {
      e.preventDefault()
      activar(CAPAS[n].id, true)
    }
  }

  return (
    <>
      <div className="pestanas" role="tablist" aria-label="Capas de la plataforma">
        {CAPAS.map((c, i) => (
          <button
            key={c.id}
            ref={(el) => {
              tabsRef.current[c.id] = el
            }}
            className="pestana"
            role="tab"
            id={`tab-${c.id}`}
            aria-controls={`panel-${c.id}`}
            aria-selected={activa === c.id}
            tabIndex={activa === c.id ? 0 : -1}
            onClick={() => activar(c.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            <span className="num">{c.num}</span> {c.nombre}
          </button>
        ))}
      </div>

      {CAPAS.map((c) => (
        <div
          key={c.id}
          className="panel"
          role="tabpanel"
          id={`panel-${c.id}`}
          aria-labelledby={`tab-${c.id}`}
          hidden={activa !== c.id}
        >
          <div className="panel-texto">
            <span className="etiqueta acento">
              {c.num} · {c.nombre}
            </span>
            <h3 className="verbo">{c.verbo}</h3>
            <p className="definicion">{c.definicion}</p>
            <ul className="lista-pixel">
              {c.puntos.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="reemplaza">
              <b>Reemplaza</b> {c.reemplaza}
            </p>
          </div>
          {c.visual}
        </div>
      ))}
    </>
  )
}
