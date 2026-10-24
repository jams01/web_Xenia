import { useEffect, useRef, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { IcoArbol, IcoAviso, IcoBrote, IcoChat, IcoCombustible, IcoFlecha, IcoGobierno, IcoUbicacion } from '../components/Icons'
import { ImpactCalculator } from '../components/ImpactCalculator'
import { PlatformTabs } from '../components/PlatformTabs'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { MAP_URL, UBICACION, WHATSAPP_LABEL, WHATSAPP_URL } from '../content/site'

// Celdas del raster de la portada: "clase:retardo" ('' = celda apagada)
const RASTER = [
  '', 'on:1', 'on:2', 'on2:3', '', '',
  'on:1', 'on2:2', 'on2:3', 'on:4', 'on:5', '',
  'on:2', 'on2:3', 'aviso:4', 'aviso:5', 'on:6', '',
  '', 'on:4', 'aviso:5', 'on2:6', 'on:7', 'on:8',
  '', '', 'on:6', 'on:7', '', '',
]

const ALIADOS = [
  { src: 'mit-solve.png', alt: 'MIT Solve', cls: 'alto' },
  { src: 'ecopetrol.png', alt: 'Grupo Ecopetrol', cls: 'l-eco' },
  { src: 'econova.png', alt: 'Econova', cls: 'alto' },
  { src: 'itc.png', alt: 'International Trade Centre', cls: 'l-itc' },
  { src: 'kosme.png', alt: 'KOSME, Korea SMEs and Startups Agency', cls: undefined },
  { src: 'technoserve.png', alt: 'TechnoServe', cls: 'l-tec' },
  { src: 'aldea.png', alt: 'ALDEA de iNNpulsa Colombia', cls: 'alto' },
  { src: 'francia.png', alt: 'República Francesa y Expertise France', cls: 'l-fr' },
]

const DOLORES = [
  ['Registro disperso', '“Las labores están en un Excel, dos cuadernos y el WhatsApp del mayordomo.”'],
  ['Detección tardía', '“Me entero de la plaga cuando ya se ve desde la carretera.”'],
  ['Insumos a ciegas', '“Abonamos todo el lote igual porque no sabemos dónde está la diferencia.”'],
  ['Exigencias del mercado', '“El comprador nos pide trazabilidad y no tenemos cómo demostrarla.”'],
]

const INDUSTRIAS = [
  {
    img: { src: '/img/colombia.webp', alt: 'Mapa de Colombia con una cuadrícula de píxeles satelitales', w: 940, h: 1080 },
    icono: <IcoBrote />,
    nombre: 'Agricultura',
    titulo: 'Más visibilidad sobre cada lote. Mejores decisiones para cada cultivo.',
    puntos: [
      'Café, cacao, palma, cítricos, tomate y gulupa.',
      'Gestiona labores, integra suelo y satélite, detecta variaciones y anticipa riesgos productivos.',
    ],
  },
  {
    img: { src: '/img/incendio.webp', alt: 'Incendio forestal avanzando sobre una ladera', w: 820, h: 1080 },
    icono: <IcoArbol />,
    nombre: 'Medio ambiente',
    titulo: 'Monitorea el territorio con evidencia, continuidad y escala.',
    puntos: [
      'Monitoreo, reporte y verificación de carbono.',
      'Cero deforestación para EUDR y la Ley 2585 de ganadería.',
      'Incendios, áreas quemadas e inundadas.',
    ],
  },
  {
    img: { src: '/img/sismica.webp', alt: 'Sección sísmica con fallas bajo el relieve de Colombia', w: 890, h: 1080 },
    icono: <IcoCombustible />,
    nombre: 'Hidrocarburos',
    titulo: 'Mayor control. Menor incertidumbre.',
    puntos: [
      'Detección de metano bajo la Resolución 40066 de 2022.',
      'Áreas de influencia y evidencias en un solo lugar.',
      'Corrección de registros con IA, conversión tiempo-profundidad y picado sísmico.',
      'Software de geofísicos para geofísicos, sin instalar nada.',
    ],
  },
  {
    img: null,
    icono: <IcoGobierno />,
    nombre: 'Gobierno',
    titulo: 'El semáforo climático de cada municipio, en un solo mapa.',
    puntos: [
      'Semáforo climático y de El Niño por municipio en XeniaMap.',
      'Una vista completa del territorio para priorizar inversión y atención.',
    ],
  },
]

const EQUIPO = [
  ['ND', 'Nilson Delgado', 'Director ejecutivo (CEO)'],
  ['AC', 'Ariolfo Camacho', 'Director de tecnología (CTO)'],
  ['EL', 'Efraín Laverde', 'Director de operaciones (COO)'],
  ['JM', 'Jonathan Monsalve', 'IA y software'],
]

const PREGUNTAS = [
  ['¿Tengo que instalar algo?', 'No. Xenia funciona en el navegador, en computador o celular.'],
  ['¿Puedo traer mis datos de Excel?', 'Sí. Importamos tus registros de lotes, labores y análisis de suelo.'],
  ['¿Qué satélites usan?', 'Sentinel-1 y Sentinel-2, PlanetScope y radar, según el área y la frecuencia que necesites.'],
  [
    '¿Necesito hacer muestreo de suelo?',
    'Para empezar con alertas satelitales, no. Para los modelos de suelo, la predicción y la agrogeofísica, sí: diseñamos el muestreo contigo.',
  ],
  ['¿Cuánto cuesta?', 'Se cobra por hectárea al año, según el área y los módulos. Para operaciones grandes el precio por hectárea baja.'],
  [
    '¿Sirve para EUDR o la Ley 2585?',
    'Sí. La capa de trazabilidad georreferencia cada lote, verifica que no haya deforestación después del 31 de diciembre de 2020 y sella los registros en blockchain, listos para la debida diligencia y la auditoría.',
  ],
  [
    '¿Para qué sirve el blockchain?',
    'Para que cada registro quede con fecha y no se pueda cambiar después. El comprador o el certificador puede comprobar que la información de origen, labores, insumos y huella de carbono es la misma que se registró en campo.',
  ],
  [
    '¿Qué es la agrogeofísica?',
    'Es la geofísica aplicada al suelo agrícola. Con mediciones desde la superficie vemos cómo cambia el suelo en profundidad (humedad, textura, compactación y agua) y así muestreamos y modelamos mejor cada lote.',
  ],
  [
    '¿Cuánto tarda en estar listo?',
    'Un lote piloto queda monitoreado en días; los modelos de predicción se calibran en el primer ciclo.',
  ],
]

function MarcoPortada() {
  const ref = useRef<HTMLElement>(null)

  // Altura del barrido animado
  useEffect(() => {
    const marco = ref.current
    if (!marco) return
    const fijar = () => marco.style.setProperty('--alto', `${marco.clientHeight}px`)
    fijar()
    window.addEventListener('resize', fijar)
    return () => window.removeEventListener('resize', fijar)
  }, [])

  return (
    <figure ref={ref} className="marco marco-portada" style={{ margin: 0 }}>
      <img
        src="/img/rio.webp"
        alt="Río y parcelas agrícolas vistos desde el espacio, en tonos oscuros"
        width="940"
        height="1080"
        fetchPriority="high"
      />
      <span className="esq si"></span>
      <span className="esq sd"></span>
      <span className="esq ii"></span>
      <span className="esq id"></span>
      <span className="barrido" aria-hidden="true"></span>
      <div className="raster" aria-hidden="true">
        {RASTER.map((celda, i) => {
          const [cls, d] = celda.split(':')
          return <i key={i} className={cls || undefined} style={d ? ({ '--d': d } as CSSProperties) : undefined}></i>
        })}
      </div>
      <span className="rotulo arriba">
        <span className="vivo"></span>XENIA · TERRITORIO LEGIBLE
      </span>
      <span className="chip atencion chip-flotante" style={{ left: 44, bottom: 64 }}>
        <IcoAviso /> Atención · pérdida de vigor, zona norte
      </span>
      <figcaption className="rotulo abajo">Ilustración · alerta de ejemplo</figcaption>
    </figure>
  )
}

export function HomePage() {
  useDocumentTitle('Xenia Group')

  return (
    <>
      <a className="saltar" href="#contenido">Saltar al contenido</a>

      <SiteHeader
        inicio="/"
        inicioLabel="Xenia Group, inicio"
        marca={<img src="/img/marca/xenia-group-lockup-senal.svg" alt="Xenia Group" width="180" height="31" />}
        enlaces={
          <>
            <a href="#plataforma">Plataforma</a>
            <a href="#industrias">Industrias</a>
            <a href="#impacto">Impacto</a>
            <a href="#trayectoria">Trayectoria</a>
            <Link className="nav-teraval" to="/teraval">Teraval</Link>
            <a href="#contacto">Contacto</a>
          </>
        }
        accion={
          <>
            <a className="boton secundario chico" href={MAP_URL} target="_blank" rel="noopener">
              Ir a Xenia Map
            </a>
            <a className="boton primario chico" href={WHATSAPP_URL} target="_blank" rel="noopener">
              Agenda tu demo
            </a>
          </>
        }
      />

      <main id="contenido">
        {/* Portada */}
        <section className="portada orbita" aria-labelledby="titulo-portada">
          <div className="humo" aria-hidden="true"></div>
          <div className="contenedor portada-grid">
            <div className="portada-texto">
              <span className="insignia">
                <span className="pixeles" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
                <b>25 años</b> de geociencia · 3 industrias
              </span>
              <h1 id="titulo-portada" className="display-xl">
                <em className="acento">Ve lo que tu territorio aún no muestra</em> y actúa antes de que se convierta en
                pérdida.
              </h1>
              <p className="entrada">
                Xenia une tus registros de campo, imágenes satelitales y modelos de suelo para avisarte qué está pasando
                y qué viene, lote por lote.
              </p>
              <div className="botones">
                <a className="boton primario" href={WHATSAPP_URL} target="_blank" rel="noopener">
                  Agenda tu demo <IcoFlecha />
                </a>
                <a className="boton secundario" href="#plataforma">Conoce la plataforma</a>
              </div>
              <p className="descriptor">Modelamiento e IA para agricultura, medio ambiente e hidrocarburos.</p>
            </div>
            <MarcoPortada />
          </div>
        </section>

        {/* Respaldo */}
        <section className="aliados" aria-labelledby="titulo-aliados">
          <div className="contenedor">
            <p className="antetitulo" id="titulo-aliados">Trayectoria y respaldo</p>
            <div className="aliados-fila">
              {ALIADOS.map((a) => (
                <figure key={a.src}>
                  <img src={`/img/aliados/${a.src}`} alt={a.alt} className={a.cls} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Lo que escuchamos en campo */}
        <section className="seccion niebla" aria-labelledby="titulo-dolor">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo">Por qué Xenia</p>
              <h2 id="titulo-dolor" className="display-l">
                <em className="acento">Lo que escuchamos en campo</em> antes de llegar con Xenia
              </h2>
              <p className="entrada">
                La información vive en hojas de cálculo, cuadernos, fotos y análisis de laboratorio que no se hablan
                entre sí. El territorio cambia más rápido que el reporte, y la operación reacciona cuando el costo ya
                creció.
              </p>
            </div>
            <div className="rejilla-2">
              {DOLORES.map(([etq, cita]) => (
                <article key={etq} className="tarjeta dolor">
                  <span className="etiqueta">{etq}</span>
                  <blockquote>{cita}</blockquote>
                </article>
              ))}
            </div>
            <div className="debajo">
              <p className="pequeno">
                Si manejas más de 50 hectáreas o un proyecto ambiental, al menos dos de estas te van a sonar.
              </p>
              <a className="enlace-texto" href={WHATSAPP_URL} target="_blank" rel="noopener">
                Empieza con un lote piloto <IcoFlecha />
              </a>
            </div>
          </div>
        </section>

        {/* Plataforma */}
        <section className="seccion" id="plataforma" aria-labelledby="titulo-plataforma">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo">Plataforma</p>
              <h2 id="titulo-plataforma" className="display-l">
                <em className="acento">Cinco capas sobre tu territorio</em> en una sola plataforma
              </h2>
              <p className="entrada">
                Datos y estadísticas, trazabilidad, alertas tempranas, predicción y agrogeofísica, conectadas a los
                mismos lotes y al mismo mapa. Empieza por una y suma las demás cuando las necesites.
              </p>
            </div>
            <PlatformTabs />
          </div>
        </section>

        {/* Del dato a la decisión */}
        <section className="seccion orbita banda" aria-labelledby="titulo-capa">
          <div className="isolineas" aria-hidden="true"></div>
          <div className="contenedor" style={{ position: 'relative' }}>
            <div className="cabecera-seccion">
              <p className="antetitulo">Xenia Group</p>
              <h2 id="titulo-capa" className="display-l">
                La capa de inteligencia que conecta el territorio con las decisiones de la industria
              </h2>
              <p className="entrada">
                DeepTech, inteligencia artificial y observación de la Tierra para transformar datos científicos en
                soluciones reales. <em className="acento">Del dato científico a la decisión real.</em>
              </p>
            </div>
            <div className="flujo" aria-label="Del dato a la decisión">
              <span className="paso">Ciencia</span><span className="flecha" aria-hidden="true"></span>
              <span className="paso">Datos</span><span className="flecha" aria-hidden="true"></span>
              <span className="paso">Inteligencia</span><span className="flecha" aria-hidden="true"></span>
              <span className="paso">Tecnología</span><span className="flecha" aria-hidden="true"></span>
              <span className="paso fin">Decisión</span>
            </div>
          </div>
        </section>

        {/* Impacto */}
        <section className="seccion" id="impacto" aria-labelledby="titulo-impacto">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo">Impacto</p>
              <h2 id="titulo-impacto" className="display-l">
                <em className="acento">¿Cuánto te cuesta</em> decidir a ciegas?
              </h2>
              <p className="entrada">
                Pon tus números. En cultivos extensos, aplicar solo donde hace falta ha bajado el uso de fertilizante en
                un 10 %.
              </p>
            </div>
            <div className="impacto-grid">
              <ImpactCalculator />
              <div className="cifras">
                <div className="cifra">
                  <span className="valor">−10 %</span>
                  <span className="que">de fertilizantes en cultivos extensos, aplicando solo donde hace falta</span>
                  <span className="fuente">FUENTE: CULTIVOS EXTENSOS CON PLATAFORMA DE TRAZABILIDAD</span>
                </div>
                <div className="tarjeta como">
                  <span className="etiqueta acento">Cómo se logra</span>
                  <ol className="pasos">
                    <li><span className="n">01</span><div><b>Data y estadísticas</b><p>Ordena lo que se aplica hoy, lote por lote.</p></div></li>
                    <li><span className="n">02</span><div><b>Alertas y agrogeofísica</b><p>Muestran dónde el suelo y el cultivo son distintos.</p></div></li>
                    <li><span className="n">03</span><div><b>Predicción y trazabilidad</b><p>Arman la prescripción por zonas y miden el resultado y la huella de carbono.</p></div></li>
                  </ol>
                </div>
              </div>
            </div>
            <p className="cierre-impacto">La precisión paga el servicio en el primer ciclo.</p>
          </div>
        </section>

        {/* Industrias */}
        <section className="seccion niebla" id="industrias" aria-labelledby="titulo-industrias">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo">Industrias</p>
              <h2 id="titulo-industrias" className="display-l">
                La misma ciencia, <em className="acento">cuatro territorios</em>
              </h2>
              <p className="entrada">
                El equipo viene de 25 años de geofísica aplicada a hidrocarburos. Hoy usa esa misma ciencia en el campo,
                el bosque y el municipio.
              </p>
            </div>
            <div className="industrias">
              {INDUSTRIAS.map((ind) => (
                <article key={ind.nombre} className="industria">
                  <div className="foto">
                    {ind.img ? (
                      <img src={ind.img.src} alt={ind.img.alt} loading="lazy" width={ind.img.w} height={ind.img.h} />
                    ) : (
                      <div className="patron" aria-hidden="true"></div>
                    )}
                  </div>
                  <div className="cuerpo">
                    <span className="etiqueta ico-titulo">
                      {ind.icono} {ind.nombre}
                    </span>
                    <h3>{ind.titulo}</h3>
                    <ul className="lista-pixel">
                      {ind.puntos.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Xenia + Teraval */}
        <section className="seccion" id="teraval" aria-labelledby="titulo-grupo">
          <div className="contenedor grupo-grid">
            <div>
              <div className="cabecera-seccion" style={{ marginBottom: 24 }}>
                <p className="antetitulo">Xenia + Teraval</p>
                <h2 id="titulo-grupo" className="display-l">
                  <em className="acento">Del dato al bioinsumo entregado.</em> Todo trazable.
                </h2>
                <p className="entrada">
                  Xenia Group reúne a Xenia, la plataforma de datos e IA, y a Teraval, la empresa de suelos,
                  biofertilizantes minerales y biofábricas.
                </p>
              </div>
              <ol className="pasos">
                <li><span className="n">01</span><div><b>Xenia diagnostica el suelo</b><p>Análisis de suelo, agrogeofísica y satélite para saber qué le falta a cada zona del lote.</p></div></li>
                <li className="t"><span className="n">02</span><div><b>Teraval formula y produce</b><p>Insumos minerales a la medida, con materias primas 100 % colombianas, en biofábricas regionales.</p></div></li>
                <li><span className="n">03</span><div><b>Xenia verifica el resultado</b><p>El siguiente ciclo muestra en el mapa si el suelo y el cultivo respondieron.</p></div></li>
              </ol>
            </div>
            <article className="tarjeta-teraval">
              <img
                src="/img/campo-cielo.webp"
                alt="Lote recién preparado con surcos de tierra y un cultivo verde al fondo"
                loading="lazy"
                width="960"
                height="400"
              />
              <div className="contenido">
                <img
                  className="logo-t"
                  src="/img/marca/teraval-endosado-ambar-orbita.svg"
                  alt="Teraval, una empresa Xenia Group"
                  width="170"
                  height="46"
                />
                <h3 className="display-m" style={{ color: '#fff' }}>Expertos en suelos y biofertilizantes minerales</h3>
                <p>
                  Formula el insumo que cada suelo necesita y lo produce en biofábricas regionales, con materias primas
                  colombianas.
                </p>
                <Link className="boton ambar" to="/teraval">
                  Conoce Teraval <IcoFlecha />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Trayectoria */}
        <section className="seccion alto" id="trayectoria" aria-labelledby="titulo-trayectoria">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo">Trayectoria</p>
              <h2 id="titulo-trayectoria" className="display-l">
                <em className="acento">Pasamos 25 años leyendo el subsuelo.</em> Ahora leemos tu suelo.
              </h2>
              <p className="entrada">
                La misma ciencia que encuentra petróleo a tres kilómetros de profundidad hoy lee el suelo de una finca:
                sísmica, registros de pozo e inversión, aplicadas al territorio.
              </p>
            </div>
            <ol className="linea-tiempo">
              <li className="hito"><span className="anio">25 años</span><span className="punto" aria-hidden="true"></span><p><b>Geociencias aplicadas a energía:</b> sísmica, pozos e inversión.</p></li>
              <li className="hito"><span className="anio">2021</span><span className="punto" aria-hidden="true"></span><p><b>MIT Solve.</b></p></li>
              <li className="hito"><span className="anio">2023</span><span className="punto" aria-hidden="true"></span><p><b>Grupo Ecopetrol y Econova.</b></p></li>
              <li className="hito"><span className="anio">2024</span><span className="punto" aria-hidden="true"></span><p><b>International Trade Centre, KOSME y TechnoServe.</b></p></li>
              <li className="hito hoy"><span className="anio">2025–2026 · hoy</span><span className="punto" aria-hidden="true"></span><p><b>Xenia Group con Xenia y Teraval.</b> iNNpulsa ALDEA y Expertise France.</p></li>
            </ol>

            <div className="proyectos">
              <div className="foto-evento">
                <img
                  src="/img/evento-2024.webp"
                  alt="Presentación de Xenia en un festival internacional de startups en 2024"
                  loading="lazy"
                  width="256"
                  height="256"
                />
                <p className="pequeno">Presentando Xenia en un festival global de startups, 2024.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="seccion" aria-labelledby="titulo-equipo">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo">Ciencia y equipo</p>
              <h2 id="titulo-equipo" className="display-l">Geociencia, datos y campo en un mismo equipo</h2>
              <p className="entrada">
                Trabajamos con los grupos de investigación IGGA y HDSP de la Universidad Industrial de Santander.
              </p>
            </div>
            <div className="equipo">
              {EQUIPO.map(([ini, nombre, rol]) => (
                <div key={nombre} className="tarjeta persona">
                  <span className="inicial" aria-hidden="true">{ini}</span>
                  <b>{nombre}</b>
                  <span>{rol}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preguntas */}
        <section className="seccion niebla" aria-labelledby="titulo-faq">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo">Preguntas frecuentes</p>
              <h2 id="titulo-faq" className="display-l">Lo que nos preguntan antes de empezar</h2>
            </div>
            <div className="preguntas">
              {PREGUNTAS.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Llamado final */}
        <section className="seccion orbita final" id="contacto" aria-labelledby="titulo-final">
          <div className="humo" aria-hidden="true"></div>
          <div className="contenedor final-grid">
            <div style={{ display: 'grid', gap: 20, justifyItems: 'start' }}>
              <p className="antetitulo">Contacto</p>
              <h2 id="titulo-final" className="display-xl">
                <em className="acento">Empieza con un lote.</em> En el primer ciclo sabrás si Xenia paga su costo.
              </h2>
              <div className="botones">
                <a className="boton primario" href={WHATSAPP_URL} target="_blank" rel="noopener">
                  <IcoChat /> Agenda tu demo por WhatsApp
                </a>
                <Link className="boton secundario" to="/teraval">Cotiza insumos con Teraval</Link>
              </div>
            </div>
            <ul className="contacto-lista">
              <li>
                <IcoChat />
                <div>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener">{WHATSAPP_LABEL}</a>
                  <small>WhatsApp</small>
                </div>
              </li>
              <li>
                <IcoUbicacion />
                <div><span>{UBICACION}, Colombia</span></div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
