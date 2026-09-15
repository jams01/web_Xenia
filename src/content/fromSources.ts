/**
 * Contenido enriquecido desde fuentes locales verificables.
 * Canva DAHRiUK84Vc «Teraval & XenIA» — importado desde content/canva-export/Teraval & XenIA.pdf
 */

/** Capacidades científicas (CV + Canva XenIA). */
export const scientificCapabilities = [
  {
    title: 'Observación de la Tierra',
    text: 'Monitoreo multitemporal de cultivos con imágenes ópticas y de radar (SAR), índices espectrales y detección de cambios.',
  },
  {
    title: 'Geovisor + IA',
    text: 'Plataforma para que agricultores, regiones y asociaciones monitoreen cultivos y mejoren su productividad.',
  },
  {
    title: 'Modelamiento e inteligencia artificial',
    text: 'Modelos avanzados para agricultura, medio ambiente e hidrocarburos, con enfoque en resiliencia climática.',
  },
  {
    title: 'Teledetección para Oil & Gas',
    text: 'Herramientas satelitales para detección de metano, círculo de hadas y analítica operativa en hidrocarburos.',
  },
] as const

/**
 * Líneas históricas Deep Science (deck interno) + alineación Canva.
 */
export const heritageLines = [
  {
    id: 'ds4agri',
    code: 'DS4AGRI',
    title: 'Agri y observación de la Tierra',
    text: 'Línea agrícola y de teledetección para monitoreo de cultivos y territorio.',
  },
  {
    id: 'ds4face',
    code: 'DS4FACE',
    title: 'Visión por computador',
    text: 'Línea de visión por computador y reconocimiento (I+D en autenticación y CV).',
  },
  {
    id: 'ds4data',
    code: 'DS4DATA / DS4ANALI',
    title: 'Datos y analítica',
    text: 'Analítica de datos, procesamiento de señales y productos de datos científicos.',
  },
  {
    id: 'lidar-spectral',
    code: 'LiDAR + Espectral',
    title: 'LiDAR y sensado espectral',
    text: 'Línea LiDAR + espectral: biomasa, salud de cultivo, cuerpos de agua e HSI.',
  },
  {
    id: 'consulting',
    code: 'DS4CONSULTING',
    title: 'Consultoría científica',
    text: 'Consultoría científica y transferencia tecnológica hacia industria y academia.',
  },
] as const

export const talentPillars = [
  {
    title: 'Talento humano',
    text: 'Equipo con formación doctoral y maestrías en ciencias de la computación, geofísica, GIS e ingeniería.',
  },
  {
    title: 'Ciencia aplicada',
    text: 'Aprendizaje profundo, analítica de datos, procesamiento de señales, sensado remoto y gestión de proyectos.',
  },
  {
    title: 'Ciencia básica',
    text: 'Matemática, modelado, óptica, estadística y optimización numérica.',
  },
] as const

/** Equipo — Teraval & XenIA + Skill Oil&Gas. */
export const teamMembers = [
  {
    name: 'Nilson Delgado',
    role: 'CEO',
    photo: '/assets/xenia/team/nilson-delgado.png',
    bullets: [
      'Geofísico MSc',
      'Científico de datos MSc',
      '25 años de experiencia en geociencias, energía y sostenibilidad',
    ],
  },
  {
    name: 'Ariolfo Camacho',
    role: 'CTO',
    photo: '/assets/xenia/team/ariolfo-camacho.png',
    bullets: [
      'Doctorado en ciencias de la computación',
      'MSc en ingeniería informática',
      'Investigador científico',
    ],
  },
  {
    name: 'Efraín Laverde',
    role: 'COO',
    photo: '/assets/xenia/team/efrain-laverde.png',
    bullets: [
      'Ing. catastral, geofísico y GIS',
      'Especialista en imágenes satelitales',
      '15 años de experiencia en geociencias',
    ],
  },
  {
    name: 'Jonathan Monsalve, Ph.D',
    role: 'IA & Software',
    photo: '/assets/xenia/team/jonathan-monsalve.png',
    bullets: ['Inteligencia Artificial', 'Desarrollo de Software'],
  },
] as const

export const clients = [
  { name: 'Ecopetrol', logo: '/assets/xenia/clients/ecopetrol.png' },
  { name: 'GeoPark', logo: '/assets/xenia/clients/geopark.png' },
  { name: 'Mansarovar', logo: '/assets/xenia/clients/mansarovar.png', scale: 'lg' },
  { name: 'Gidco', logo: '/assets/xenia/clients/gidco.png' },
  { name: 'Prestigio', logo: '/assets/xenia/clients/prestigio.png', scale: 'lg' },
] as const

export const aboutFromSources = {
  lead: 'XenIA convierte investigación científica y datos complejos en tecnología aplicada para industria y gobierno.',
  body: 'Modelamiento e inteligencia artificial para agricultura, medio ambiente e hidrocarburos. El equipo aporta trayectoria en teledetección, deep learning, computer vision y geociencias — llevando evidencia científica a plataformas operativas como XeniaMap.',
  ecosystem:
    'El ecosistema incluye XeniaMap (inteligencia en el mapa) y Teraval (expertos en suelos y biofertilizantes minerales), como experiencias independientes.',
} as const

/** Capabilidades hidrocarburos — Skill Oil&Gas / Canva. */
export const hydrocarbonCapabilities = [
  {
    title: 'Corrección de registros con IA',
    text: 'Algoritmo de IA para la corrección de registros en presencia de bad hole.',
    image: '/assets/canva/hydro/01-registros.jpg',
    points: ['Detección de bad hole', 'Corrección automática de curvas', 'Mayor confiabilidad del registro'],
  },
  {
    title: 'Conversión tiempo–profundidad',
    text: 'Plugin de conversión tiempo–profundidad aplicando técnica de rayo imagen.',
    image: '/assets/canva/hydro/02-tiempo-profundidad.jpg',
    points: ['Técnica de rayo imagen', 'Integración sísmica–pozo', 'Plugin listo para flujo operativo'],
  },
  {
    title: 'Picado interactivo',
    text: 'Módulo de picado interactivo de horizontes sobre secciones sísmicas.',
    image: '/assets/canva/hydro/03-picado.jpg',
    points: ['Horizontes sobre sísmica', 'Edición interactiva', 'Apoyo a interpretación estructural'],
  },
  {
    title: 'Monitoreo de fenoles',
    text: 'Monitoreo en tiempo real de nivel de fenoles en aguas de vertimiento con celda espectral UV.',
    image: '/assets/canva/hydro/04-fenoles.jpg',
    points: ['Tiempo real', 'Celda espectral UV', 'Aguas de vertimiento'],
  },
  {
    title: 'Clasificación de núcleos',
    text: 'Red neuronal convolucional para clasificación automática de patrones sedimentológicos en fotografías de núcleos de roca.',
    image: '/assets/canva/hydro/05-nucleos.jpg',
    points: ['CNN sobre fotografías', 'Patrones sedimentológicos', 'Clasificación automática'],
  },
  {
    title: 'Visualización 3D',
    text: 'Herramienta de visualización 2D/3D y segmentación del histograma CT de muestras de roca.',
    image: '/assets/canva/hydro/06-viz3d.jpg',
    points: ['Vista 2D/3D', 'Histograma CT', 'Segmentación de muestras'],
  },
] as const

/** Contenido BioAgro → Teraval (bioagro.com.co + Canva). */
export const bioagroContent = {
  sourceUrl: 'https://bioagro.com.co/',
  legalName: 'BIOAGRO SC S.A.S.',
  tagline: 'Agricultura regenerativa y tecnología · Insumos orgánicos para agricultura',
  intro:
    'Somos una empresa de agricultura regenerativa y tecnología de punta para mejorar la calidad de los suelos y hacer una agricultura sostenible.',
  missionTitle: 'Cómo queremos cambiar el mundo',
  mission:
    'Entendemos el suelo como un ser vivo maravilloso que ha sido testigo y fiel acompañante de la evolución humana y que hoy nosotros necesitamos de él para nuestra supervivencia, por eso nuestra prioridad es hacer un cambio urgente en las prácticas culturales y la manera en que nos relacionamos con el mundo del cual solo conocemos el 2% e intentamos proteger por medio de insumos sostenibles y con una menor huella de carbono.',
  whatWeDoTitle: 'Esto es lo que hacemos',
  whatWeDoLead: 'Somos amantes del campo, queremos lo mejor para el suelo, para los cultivadores y los consumidores.',
  companyBlurb:
    'Investigación, desarrollo y producción de insumos biológicos para el manejo sostenible del sector agrícola colombiano.',
  projects: [
    {
      id: 'tomato',
      title: 'Tomato For Future',
      text: 'El cultivo de tomate orgánico más del país con implementación de diferentes técnicas y tecnologías.',
      image: '/assets/teraval/bioagro/DOS-1-1024x768.jpeg',
    },
    {
      id: 'agrotrust',
      title: 'AgroTrust',
      text: 'AGT es una aplicación para capturar datos y trazar diferentes parámetros como los polígonos de siembra, semillas e insumos, entre otros, por medio de blockchain.',
      image: '/assets/teraval/bioagro/cuatro-1024x768.jpeg',
    },
    {
      id: 'carbonos',
      title: 'Carbonos',
      text: 'Empresa científica dedicada a la investigación del ciclo del carbono y su impacto en agricultura. Desarrolla estrategias y productos que fomentan una agricultura sostenible.',
      image: '/assets/teraval/bioagro/Nueve-1024x576.jpeg',
    },
    {
      id: 'insumos',
      title: 'Insumos y servicios',
      text: 'Portafolio de productos y servicios especializados en la nutrición y regeneración de suelos para tu proyecto.',
      image: '/assets/teraval/bioagro/ocho-1024x576.jpeg',
    },
  ],
  services: [
    'Análisis de suelo',
    'Asistencia técnica',
    'Bioinsumos',
    'Abonos orgánicos',
  ],
  contact: {
    place: 'Choachí, Cundinamarca — Colombia',
    phone: '+57 300 675 0005',
    email: 'info@bioagro.com.co',
    whatsapp: 'https://wa.me/573006750005',
  },
} as const

export const teravalFromCanva = {
  headline: 'Expertos en suelos y biofertilizantes minerales',
  pitch:
    'Combinamos insumos minerales regenerativos y modelado de suelos para transformar la agricultura en toda América Latina.',
  problems: ['Suelos agotados', 'Precios y problemas de carácter mundial'],
  offers: [
    'Desarrollo de biofábricas en cualquier lugar del país',
    'Venta de bioproductos mineralizados',
  ],
  productsTitle: 'Productos: minerales a la medida',
  productsLead:
    'Equilibramos el suelo aportando los nutrientes específicos que cada cultivo necesita en cada etapa de su desarrollo.',
  productsMetric: '+40% minerales en los alimentos',
  productsBody:
    'Formulaciones minerales personalizadas por lote, diseñadas desde análisis de suelo local. Materias primas 100% colombianas y andinas, sin dependencia de importaciones, más ecosistemas de microorganismos.',
  productLines: [
    {
      title: 'Acondicionadores de suelo',
      items: ['AgroMineral (Super Humagro)'],
    },
    {
      title: 'Nutrición mineral',
      items: ['Multimineral', 'Flor mineral', 'Llenado'],
    },
  ],
  rawMaterials:
    'Leonardita · Sal marina de La Guajira · Rocas volcánicas · Zeolita · Diatomeas · Rocas locales',
  slogan: 'Suelo sano, planta sana',
  community: {
    title: 'Proyectos de empoderamiento comunitario',
    subtitle: 'Centro de regeneración e innovación del suelo',
    text: 'Nodos físicos por departamento colombiano que funcionan simultáneamente como biofábrica de insumos, centro de datos satelital, punto de distribución y capacitación en agricultura regenerativa.',
    tags: ['Asociaciones', 'Proyectos', 'Sostenibilidad'],
    education: 'Programas de educación en agricultura regenerativa · más de 30 comunidades',
    goal2026: 'Meta 2026: 3 centros — Bogotá + Ibagué + Santander',
  },
  opportunities: [
    'Desarrollo de proyectos a nivel de gobierno (país, departamentos o municipios)',
    'Desarrollo de biofábricas para comunidades agrícolas',
    'Venta de producto a asociaciones o grandes productores',
  ],
} as const

export const teravalAssets = {
  hero: '/assets/teraval/intro.png',
  heroField: '/assets/teraval/bioagro/photo_2022-08-09_18-46-33.jpg',
  gallery: [
    '/assets/teraval/bioagro/DOS-1-1024x768.jpeg',
    '/assets/teraval/bioagro/cuatro-1024x768.jpeg',
    '/assets/teraval/bioagro/Nueve-1024x576.jpeg',
    '/assets/teraval/bioagro/ocho-1024x576.jpeg',
    '/assets/teraval/bioagro/seis-1024x576.jpeg',
    '/assets/teraval/bioagro/tres-1024x768.jpeg',
    '/assets/teraval/bioagro/siete-1024x693.jpeg',
    '/assets/teraval/intro_2.png',
    '/assets/teraval/intro_3.png',
    '/assets/teraval/pipeline.png',
  ],
  accent: '/assets/teraval/cerebro.png',
  canvaCover: '/assets/canva/teraval-cover.jpg',
  canvaProduct: '/assets/canva/teraval-product.jpg',
  canvaCommunity: '/assets/canva/slide-07.jpg',
} as const

/** Imágenes XenIA demos (Canva + stock temático). */
export const xeniaAssets = {
  hero: {
    earth: '/assets/xenia/hero/earth-night.jpg',
    orbit: '/assets/xenia/hero/orbit.jpg',
    lab: '/assets/xenia/hero/lab.jpg',
    field: '/assets/xenia/hero/field.jpg',
    /** Skill Oil&Gas slide 6 — independiente de solutions.map (XeniaMap). */
    deeptech: '/assets/xenia/hero/slide6-plantation.jpg',
  },
  industries: {
    agriculture: '/assets/xenia/industries/agriculture.jpg',
    disaster: '/assets/xenia/industries/disaster.jpg',
    ogm: '/assets/xenia/industries/ogm.jpg',
    urban: '/assets/xenia/industries/urban.jpg',
    carbon: '/assets/xenia/industries/carbon.jpg',
  },
  tech: {
    ai: '/assets/xenia/tech/ai.jpg',
    eo: '/assets/xenia/tech/eo.jpg',
    lidar: '/assets/xenia/tech/lidar.jpg',
    lidarVideo: '/assets/xenia/tech/lidar-loop.mp4',
    lidarPoster: '/assets/xenia/tech/lidar-poster.jpg',
    geo: '/assets/xenia/tech/geo.jpg',
    sci: '/assets/xenia/tech/sci.jpg',
  },
  solutions: {
    map: '/assets/xenia/solutions/map.jpg',
    sensor: '/assets/xenia/solutions/sensor.jpg',
    pipeline: '/assets/xenia/solutions/pipeline.jpg',
    hydrocarbons: '/assets/xenia/solutions/hydrocarbons.jpg',
    orbit: '/assets/xenia/science/pipeline-orbit.jpg',
    industryEo: '/assets/xenia/solutions/industry-eo.jpg',
    industryAi: '/assets/xenia/solutions/industry-ai.jpg',
    industryAgro: '/assets/xenia/solutions/industry-agro.jpg',
    industryHydro: '/assets/xenia/solutions/industry-hydro.jpg',
  },
  canva: {
    cover: '/assets/canva/xenia-cover.jpg',
    agroDashboard: '/assets/canva/slide-12.jpg',
    agroMultisensor: '/assets/canva/slide-13.jpg',
    hydrocarbonsTitle: '/assets/canva/slide-17.jpg',
    hydrocarbonsGrid: '/assets/canva/slide-19.jpg',
  },
} as const

export const canvaStatus = {
  designId: 'DAHRiUK84Vc',
  titleDetected: 'Teraval & XenIA',
  url: 'https://www.canva.com/design/DAHRiUK84Vc/uKaFPZLSPtGvdQGJgmk_Bw/edit',
  imported: true,
  dropFolder: 'content/canva-export/',
  sourceFile: 'content/canva-export/Teraval & XenIA.pdf',
  note: 'Contenidos del Canva integrados en textos, equipo, Teraval e industrias XenIA.',
} as const
