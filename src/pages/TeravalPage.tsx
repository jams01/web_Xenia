import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  IcoChat,
  IcoCorreo,
  IcoEscaner,
  IcoFabrica,
  IcoHoja,
  IcoInstagram,
  IcoMatraz,
  IcoPersonas,
  IcoUbicacion,
} from '../components/Icons'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { UBICACION, WHATSAPP_LABEL, WHATSAPP_URL } from '../content/site'

const SERVICIOS: { icono: ReactNode; titulo: string; textos: string[]; ancha?: boolean }[] = [
  {
    icono: <IcoMatraz />,
    titulo: 'Análisis de suelo',
    ancha: true,
    textos: [
      'Es la herramienta de diagnóstico nutricional con la que recomendamos la fertilización: rápida, de bajo costo y accesible. Dice si los nutrientes están en suficiencia o en deficiencia, y si hay acidez excesiva, salinidad o toxicidad por algún elemento.',
      'Un suelo fértil no siempre es productivo: el mal drenaje, la poca profundidad, las piedras en superficie o la falta de humedad también limitan la producción. Por eso miramos sus características químicas y físicas.',
    ],
  },
  {
    icono: <IcoEscaner />,
    titulo: 'Cromatografía de suelo',
    ancha: true,
    textos: [
      'Un diagnóstico cualitativo que complementa el análisis químico. La muestra se separa y se revela en patrones de forma y color que muestran la salud, la fertilidad, la actividad biológica y el equilibrio entre las partes del suelo.',
    ],
  },
  {
    icono: <IcoPersonas />,
    titulo: 'Asistencia técnica',
    textos: [
      'Supervisión continua del cultivo, de la siembra a la cosecha, para subir productividad, competitividad y ganancia de forma sostenible.',
    ],
  },
  {
    icono: <IcoFabrica />,
    titulo: 'Bioinsumos',
    textos: [
      'La biofábrica produce a partir de organismos vivos o sus derivados (hongos, bacterias, material vegetal y enzimas): bioestimulantes, biofertilizantes, biocontroladores, bioestabilizadores, bioinoculantes y biofungicidas. El portafolio se organiza en enmiendas minerales, materia orgánica y microbiología.',
    ],
  },
  {
    icono: <IcoHoja />,
    titulo: 'Abonos orgánicos',
    textos: [
      'Gallinaza semidescompuesta que sube de temperatura y se inocula con microorganismos eficientes; luego se mezcla con minerales de rocas volcánicas y fosforitas. Mejora la estructura del suelo, reutiliza residuos, ayuda a fijar carbono, requiere menos energía para producirse y aumenta la retención de agua.',
    ],
  },
]

const PRODUCTOS: { nombre: string; tipo: string; hongo?: boolean; texto: string }[] = [
  { nombre: 'AGRORMUS Inicio', tipo: 'Foliar · primeras etapas', texto: 'A base de sales marinas, formulado para los primeros meses del cultivo. Aporta calcio, hierro y otros micronutrientes.' },
  { nombre: 'AGRORMUS Floración', tipo: 'Foliar · floración', texto: 'A base de sales marinas, para el cuidado, la protección y el crecimiento de la flor. Una buena flor da un buen fruto.' },
  { nombre: 'AGRORMUS Max', tipo: 'Foliar · todo el ciclo', texto: 'Sales marinas con trazas minerales para el desarrollo de la flor y el crecimiento del fruto. Se usa en cualquier etapa.' },
  { nombre: 'Humagro', tipo: 'Nutrición', texto: 'Insumo líquido de uso agrícola. Consulta su ficha técnica y la dosis recomendada para tu cultivo.' },
  { nombre: 'Fosfi-Bom', tipo: 'Planta y suelo', texto: 'Trazas minerales, microorganismos de páramo y suero. Nutre la planta y el suelo y ayuda a equilibrar su microbiología.' },
  { nombre: 'Biopower', tipo: 'Biológico · tomate', texto: 'Microorganismos de montaña para todo el ciclo del tomate. Apoya el crecimiento y llenado del fruto y la microbiología del suelo.' },
  { nombre: 'Biomagro', tipo: 'Trazas minerales', texto: 'El más completo en trazas: más de 15 minerales con roca mineral. Sirve para cualquier cultivo y en cualquier etapa.' },
  { nombre: 'Bio-Magnesio', tipo: 'Humus mineral', texto: 'Con trazas de azufre y roca volcánica. El magnesio es parte de la clorofila y activa enzimas de la fotosíntesis.' },
  { nombre: 'Azucal Max', tipo: 'Fungicida mineral', hongo: true, texto: 'Caldo sulfocálcico (cal y azufre) enriquecido con diatomeas. Preventivo contra hongos en raíz, tallo y hoja.' },
  { nombre: 'Biordeles', tipo: 'Fungicida mineral', hongo: true, texto: 'A base de caldo bordelés (sulfato de cobre y cal). Previene ácaros y enfermedades como la antracnosis y el mildiu.' },
]

const CIFRAS = [
  ['+30 %', 'de productividad', 'TOMATE BAJO INVERNADERO, 2 HA'],
  ['−40 %', 'en costo de fertilizantes', 'MISMO CASO DE TOMATE'],
  ['73 %', 'de recuperación del suelo en 6 meses', 'ÍNDICE REG'],
  ['+120 ha', 'regeneradas', 'PROTOCOLO DE REGENERACIÓN'],
]

const VALORES = [
  ['Excelencia', 'Llevamos la calidad al máximo: probamos cada producto antes de sacarlo al mercado. Así ganamos la confianza del equipo y la lealtad de los clientes.'],
  ['Pasión', 'Amamos el campo y la salud del suelo, de quien cultiva y de quien consume. Eso nos mueve a innovar.'],
  ['Empatía', 'Entendemos las necesidades reales del productor, ajustamos productos y servicios a cada suelo y hacemos seguimiento al cultivo.'],
]

export function TeravalPage() {
  useDocumentTitle('Teraval · Xenia Group')

  return (
    <div className="pagina-teraval">
      <a className="saltar" href="#contenido">Saltar al contenido</a>

      <SiteHeader
        variante="clara"
        inicio="/teraval"
        inicioLabel="Teraval, inicio"
        marca={
          <img src="/img/marca/teraval-endosado-ambar.svg" alt="Teraval, una empresa Xenia Group" width="126" height="34" />
        }
        enlaces={
          <>
            <a href="#biofabrica">Biofábrica</a>
            <a href="#servicios">Servicios</a>
            <a href="#productos">Productos</a>
            <a href="#historia">Trayectoria</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
            <Link className="nav-xenia" to="/">Xenia Group</Link>
          </>
        }
        accion={
          <a className="boton ambar chico" href={WHATSAPP_URL} target="_blank" rel="noopener">
            Cotiza por WhatsApp
          </a>
        }
      />

      <main id="contenido">
        <section className="teraval-portada" aria-labelledby="titulo-t">
          <div className="contenedor teraval-portada-grid">
            <div className="portada-texto">
              <span
                className="insignia"
                style={{ background: 'var(--ambar-suave)', borderColor: 'transparent', color: 'var(--ambar-texto)' }}
              >
                Una empresa Xenia Group
              </span>
              <h1 id="titulo-t" className="display-xl">
                <em className="acento-ambar">Expertos en suelos</em> y biofertilizantes minerales.
              </h1>
              <p className="entrada">
                El insumo que tu suelo necesita, formulado desde su análisis y producido cerca de tu finca. Con materias
                primas 100 % colombianas.
              </p>
              <div className="botones">
                <a className="boton ambar" href={WHATSAPP_URL} target="_blank" rel="noopener">
                  <IcoChat /> Cotiza por WhatsApp
                </a>
                <a className="boton secundario" href="#productos">Ver productos</a>
              </div>
            </div>
            <figure className="foto-campo" style={{ margin: 0 }}>
              <img
                src="/img/campo-cielo.webp"
                alt="Lote preparado con surcos de tierra, cultivo verde y cielo nublado"
                width="960"
                height="400"
                fetchPriority="high"
              />
              <figcaption className="sello">
                <img src="/img/biofabrica.webp" alt="" width="256" height="256" />
                <span>
                  <b>Biofábrica regional</b>
                  <span>Formulamos y producimos cerca de donde se siembra.</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Del dato al bioinsumo */}
        <section className="seccion niebla" id="biofabrica" aria-labelledby="titulo-dato">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo ambar">Cómo trabajamos</p>
              <h2 id="titulo-dato" className="display-l">
                <em className="acento-ambar">Del dato al bioinsumo entregado.</em> Todo trazable.
              </h2>
              <p className="entrada">
                Insumos minerales formulados por lote desde el análisis de suelo, con materias primas 100 % colombianas,
                producidos en biofábricas regionales y verificados en el siguiente ciclo.
              </p>
            </div>
            <div className="pasos-horizontal">
              <div className="p">
                <span className="etiqueta">01 · Xenia</span>
                <b>Diagnostica el suelo</b>
                <p>Análisis de suelo, cromatografía, agrogeofísica e imágenes satelitales para saber qué le falta a cada zona.</p>
              </div>
              <div className="u" aria-hidden="true"><i></i></div>
              <div className="p t">
                <span className="etiqueta">02 · Teraval</span>
                <b>Formula y produce</b>
                <p>El insumo a la medida, hecho en una biofábrica regional.</p>
              </div>
              <div className="u" aria-hidden="true"><i></i></div>
              <div className="p">
                <span className="etiqueta">03 · Xenia</span>
                <b>Verifica el resultado</b>
                <p>El siguiente ciclo muestra si el suelo y el cultivo respondieron.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="seccion" id="servicios" aria-labelledby="titulo-serv">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo ambar">Servicios</p>
              <h2 id="titulo-serv" className="display-l">
                Junto al productor <em className="acento-ambar">desde la siembra hasta la cosecha</em>
              </h2>
            </div>
            <div className="servicios">
              {SERVICIOS.map((s) => (
                <article key={s.titulo} className={s.ancha ? 'tarjeta ancha' : 'tarjeta'}>
                  <span className="ico-ambar">{s.icono}</span>
                  <h3>{s.titulo}</h3>
                  {s.textos.map((t) => (
                    <p key={t} className="pequeno">{t}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Productos */}
        <section className="seccion niebla" id="productos" aria-labelledby="titulo-prod">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo ambar">Productos</p>
              <h2 id="titulo-prod" className="display-l">
                Diez insumos líquidos <em className="acento-ambar">para nutrir y proteger</em>
              </h2>
              <p className="entrada">
                Todos son líquidos solubles de uso agrícola en envase de 20 litros. Pide la ficha técnica y la dosis para
                tu cultivo por WhatsApp.
              </p>
            </div>
            <div className="productos">
              {PRODUCTOS.map((p) => (
                <article key={p.nombre} className="tarjeta producto">
                  <span className="nombre">{p.nombre}</span>
                  <span className={p.hongo ? 'tipo hongo' : 'tipo'}>{p.tipo}</span>
                  <p>{p.texto}</p>
                  <span className="pres">Líquido soluble · 20 L</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Finca demostrativa */}
        <section className="seccion" aria-labelledby="titulo-finca">
          <div className="contenedor">
            <div className="finca-grid">
              <div className="galeria">
                <figure className="g1">
                  <img src="/img/tomates.webp" alt="Tomates verdes en plantas sanas sobre suelo pedregoso" loading="lazy" width="1280" height="720" />
                  <figcaption>Choachí · tomate</figcaption>
                </figure>
                <figure>
                  <img src="/img/finca-aerea.webp" alt="Vista aérea de la finca con lotes e invernaderos" loading="lazy" width="512" height="577" />
                </figure>
                <figure>
                  <img src="/img/invernadero.webp" alt="Plantas de tomate bajo invernadero" loading="lazy" width="1024" height="768" />
                </figure>
              </div>
              <div style={{ display: 'grid', gap: 18 }}>
                <p className="antetitulo ambar">Finca demostrativa</p>
                <h2 id="titulo-finca" className="display-l">Tomato for the Future</h2>
                <p className="entrada">
                  Tomate a escala con agricultura regenerativa en Choachí, Cundinamarca, a hora y media de Bogotá, entre
                  dos de los páramos más grandes y sobre suelos de gran variedad mineral.
                </p>
                <ul className="lista-pixel">
                  <li>8 hectáreas entre farallones de roca, abastecidas por 2 reservorios.</li>
                  <li>Asociación de cultivos: maíz, arveja, cebolla y calabacín para equilibrar la nutrición del suelo.</li>
                  <li>Agricultura de precisión para anticipar desbalances minerales antes de que se vuelvan plagas o enfermedades.</li>
                </ul>
              </div>
            </div>
            <div className="cifras-fila">
              {CIFRAS.map(([valor, que, fuente]) => (
                <div key={valor} className="cifra ambar">
                  <span className="valor">{valor}</span>
                  <span className="que">{que}</span>
                  <span className="fuente">{fuente}</span>
                </div>
              ))}
            </div>
            <p className="nota">Resultados obtenidos por el equipo como Bioagro, 2021–2024.</p>
          </div>
        </section>

        {/* De Bioagro a Teraval */}
        <section className="seccion alto" id="historia" aria-labelledby="titulo-bioagro">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo ambar">Trayectoria · 2021–2024</p>
              <h2 id="titulo-bioagro" className="display-l">
                <em className="acento-ambar">De Bioagro a Teraval</em>
              </h2>
              <p className="entrada">
                Teraval continúa el trabajo que el equipo hizo como Bioagro: agricultura regenerativa y tecnología para
                mejorar la calidad de los suelos. Bioagro investigó, desarrolló y produjo insumos biológicos para el
                manejo sostenible del agro colombiano, con el respaldo de MIT Solve desde 2021.
              </p>
            </div>
            <div className="rejilla-3">
              <article className="tarjeta proyecto">
                <div className="foto logo">
                  <img src="/img/aliados/bioagro.png" alt="Logotipo de Bioagro" loading="lazy" width="384" height="137" />
                </div>
                <div className="cuerpo">
                  <span className="etiqueta">Insumos y servicios</span>
                  <h3>Bioagro</h3>
                  <p className="pequeno">
                    El portafolio para nutrir y regenerar suelos: análisis de suelo, asistencia técnica, bioinsumos y
                    abonos orgánicos. Hoy es Teraval.
                  </p>
                </div>
              </article>
              <article className="tarjeta proyecto">
                <div className="foto contener">
                  <img
                    src="/img/agrotrust-mvp.webp"
                    alt="Pantallas de la aplicación AgroTrust: fincas, cultivos y registro"
                    loading="lazy"
                    width="963"
                    height="300"
                  />
                </div>
                <div className="cuerpo">
                  <span className="etiqueta">Trazabilidad</span>
                  <h3>AgroTrust</h3>
                  <p className="pequeno">
                    Aplicación para registrar polígonos de siembra, semillas e insumos con blockchain. Trazar la
                    agricultura para formalizarla, monitorearla y anticipar el mercado.
                  </p>
                </div>
              </article>
              <article className="tarjeta proyecto">
                <div className="foto patron"><span>Carbonos</span></div>
                <div className="cuerpo">
                  <span className="etiqueta">Ciencia del carbono</span>
                  <h3>Carbonos</h3>
                  <p className="pequeno">
                    Una línea científica dedicada al ciclo del carbono y su efecto en la agricultura, con estrategias y
                    productos para una agricultura sostenible.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section className="seccion niebla" id="nosotros" aria-labelledby="titulo-nos">
          <div className="contenedor">
            <div className="cabecera-seccion">
              <p className="antetitulo ambar">Nosotros</p>
              <h2 id="titulo-nos" className="display-l">
                <em className="acento-ambar">El suelo es un ser vivo.</em> Cuidarlo es cuidar la cosecha.
              </h2>
              <p className="entrada">
                La agricultura usa cerca del 70 % del agua dulce que se extrae en el mundo (FAO) y muchos suelos se están
                volviendo secos y pobres en nutrientes. Investigamos, desarrollamos y producimos insumos para una
                agricultura sostenible en Colombia, que suba la productividad sin dañar el ambiente ni la salud.
              </p>
            </div>
            <div className="mision-grid">
              <article className="tarjeta">
                <span className="etiqueta acento-ambar">Misión</span>
                <h3>Producción abundante, sana y de calidad</h3>
                <p className="pequeno">
                  Que cada productor compruebe que puede lograrla con fertilizantes minerales, bioinsumos y enmiendas
                  orgánicas. El principio es mantener el suelo vivo: plantas más sanas y vigorosas, que resisten mejor
                  plagas y enfermedades.
                </p>
              </article>
              <article className="tarjeta">
                <span className="etiqueta acento-ambar">Visión</span>
                <h3>Guardianes de su tierra</h3>
                <p className="pequeno">
                  Acompañar a campesinos y productores en la transición hacia una agricultura sostenible, para que cuiden
                  su tierra en lugar de agotarla.
                </p>
              </article>
            </div>
            <div className="valores">
              {VALORES.map(([nombre, texto]) => (
                <article key={nombre} className="tarjeta">
                  <span className="etiqueta acento-ambar">{nombre}</span>
                  <p className="pequeno">{texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="seccion orbita final" id="contacto" aria-labelledby="titulo-ct">
          <div className="contenedor final-grid">
            <div style={{ display: 'grid', gap: 20, justifyItems: 'start' }}>
              <p className="antetitulo ambar">Contacto</p>
              <h2 id="titulo-ct" className="display-xl">
                <em className="acento-ambar">Cuéntanos qué cultivas</em> y te decimos qué necesita tu suelo.
              </h2>
              <div className="botones">
                <a className="boton ambar" href={WHATSAPP_URL} target="_blank" rel="noopener">
                  <IcoChat /> Escríbenos por WhatsApp
                </a>
                <Link className="boton secundario" to="/">Conoce Xenia Group</Link>
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
                <IcoCorreo />
                <div><a href="mailto:info@bioagro.com.co">info@bioagro.com.co</a></div>
              </li>
              <li>
                <IcoUbicacion />
                <div><span>{UBICACION}, Colombia</span></div>
              </li>
              <li>
                <IcoInstagram />
                <div>
                  <a href="https://www.instagram.com/bioagrosc/" target="_blank" rel="noopener">Instagram</a> ·{' '}
                  <a href="https://www.facebook.com/Bioagro-SC-109574251457370" target="_blank" rel="noopener">Facebook</a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
