/** Contenido editorial XenIA / Teraval / XeniaMap.
 * Fuente principal: Canva «Teraval & XenIA» (content/canva-export/).
 */

import {
  aboutFromSources,
  canvaStatus,
  hydrocarbonCapabilities,
  teravalFromCanva,
  bioagroContent,
} from './fromSources'

export { canvaStatus, hydrocarbonCapabilities, bioagroContent }

export const brand = {
  name: 'XenIA',
  tagline: 'Modelamiento e IA para agricultura, medio ambiente e hidrocarburos.',
  subtitle:
    'DeepTech, inteligencia artificial y observación de la Tierra para transformar datos científicos en soluciones reales para la industria.',
  narrative: 'Ciencia → Datos → Inteligencia → Tecnología → Soluciones reales',
  xeniamapUrl: 'https://map.xeniagroup.co/',
  aboutLead: aboutFromSources.lead,
  aboutBody: aboutFromSources.body,
  aboutEcosystem: aboutFromSources.ecosystem,
} as const

export const logos = {
  xenia: '/logo/xenia_logotipo_positivo@3x.png',
  xeniaColor: '/logo/xenia_logotipo_color@3x.png',
  xeniaSvg: '/logo/xenia_logo_edition.svg',
  xeniamap: '/logo/xenia_MAP.png',
  teraval: '/logo/teraval_logo_hrz_positivo@3x.png',
  teravalColor: '/logo/teraval_logo_hrz_color@3x.png',
} as const

export const sciencePipeline = [
  { id: 'research', label: 'Investigación', desc: 'Investigación científica aplicada' },
  { id: 'data', label: 'Datos', desc: 'Datos satelitales, LiDAR y de campo' },
  { id: 'ai', label: 'IA', desc: 'Modelos de visión e inteligencia espacial' },
  { id: 'technology', label: 'Tecnología', desc: 'Plataformas y sistemas operativos' },
  { id: 'solutions', label: 'Soluciones reales', desc: 'Decisiones para industria y gobierno' },
] as const

export const technologies = [
  {
    id: 'ai',
    title: 'Inteligencia artificial',
    items: ['Aprendizaje automático', 'Deep learning', 'Visión por computador', 'Modelos de IA', 'Analítica predictiva'],
  },
  {
    id: 'eo',
    title: 'Observación de la Tierra',
    items: ['Imágenes satelitales', 'Multiespectral', 'Hiperespectral', 'SAR', 'Teledetección'],
  },
  {
    id: 'lidar',
    title: 'LiDAR',
    items: ['Cartografía 3D', 'Análisis de terreno', 'Infraestructura', 'Análisis de vegetación', 'Gemelos digitales'],
  },
  {
    id: 'geo',
    title: 'Inteligencia geoespacial',
    items: ['SIG', 'Analítica espacial', 'IA geoespacial', 'Detección de cambios', 'Series temporales'],
  },
  {
    id: 'sci',
    title: 'Cómputo científico',
    items: ['Procesamiento de datos', 'Modelado', 'Simulación', 'Analítica científica'],
  },
] as const

export const industries = [
  {
    id: 'agriculture',
    label: 'AGRICULTURA',
    caption: 'Monitoreo satelital\nEstudio sobre tu finca/cultivo',
    title: 'Agricultura y medio ambiente',
    titleEs: 'Agricultura y medio ambiente',
    description:
      'Geovisor + IA para que agricultores, regiones y asociaciones monitoreen cultivos y mejoren su productividad. Enfoque en café, cacao, tomate, gulupa y hortalizas, con resiliencia climática.',
    tech: ['Satélite', 'NDVI', 'Geovisor + IA'],
  },
  {
    id: 'ogm',
    label: 'HIDROCARBUROS, MINERÍA Y ENERGÍA',
    caption: 'IA aplicada a Oil & Gas\nDesarrollos específicos\nDetección de metano',
    title: 'Hidrocarburos, minería y energía',
    titleEs: 'Hidrocarburos, minería y energía',
    description:
      'Equipo experto en software e inteligencia artificial para Oil & Gas y minería: teledetección satelital, detección de metano, círculo de hadas y herramientas de modelamiento geofísico.',
    tech: ['Teledetección', 'IA', 'Geofísica'],
    href: '#hidrocarburos',
  },
  {
    id: 'disaster',
    label: 'DESASTRES',
    caption: 'Detección de áreas quemadas, focos, áreas inundadas',
    title: 'Manejo de desastres',
    titleEs: 'Manejo de desastres',
    description:
      'Detección, monitoreo y evaluación de daños ante incendios, inundaciones, deslizamientos y eventos extremos.',
    tech: ['Detección de cambios', 'SAR', 'Series temporales'],
  },
  {
    id: 'urban',
    label: 'GOBIERNO',
    caption: 'Smart city',
    title: 'Planeación urbana',
    titleEs: 'Planeación urbana y ciudades inteligentes',
    description:
      'Crecimiento urbano, infraestructura, inventario de árboles urbanos y seguimiento temporal del territorio.',
    tech: ['LiDAR', 'SIG', 'Gemelos digitales'],
  },
  {
    id: 'carbon',
    label: 'AMBIENTE',
    caption: 'Detección de deforestación, estimación de captura de carbono',
    title: 'Agro y mercados de carbono',
    titleEs: 'Agro y mercados de carbono',
    description:
      'Monitoreo agrícola y de carbono, MRV, cambios de cobertura y sostenibilidad con análisis satelital.',
    tech: ['MRV', 'Multiespectral', 'Analítica espacial'],
  },
] as const

export const xeniamap = {
  title: 'XeniaMap',
  concept: 'XenIA desarrolla la inteligencia. XeniaMap la lleva al mapa.',
  focus:
    'Geovisor + IA para productividad agrícola, y software e inteligencia artificial para Oil & Gas — del dato satelital a la decisión operativa.',
  description:
    'Plataforma del ecosistema XenIA para llevar inteligencia geoespacial al mapa: capas, análisis y lectura territorial para industria y gobierno. Incluye flujos de análisis agrícola — dashboard multisensor espectral–espacio–temporal —, detección de incendios y detección de metano.',
  cta: 'Explorar XeniaMap',
  url: 'https://map.xeniagroup.co/',
} as const

/** Teraval — contenido BioAgro (bioagro.com.co) + Canva, bajo marca Teraval. */
export const teraval = {
  title: 'Teraval',
  role: teravalFromCanva.headline,
  tagline: bioagroContent.tagline,
  pitch: bioagroContent.intro,
  purpose: bioagroContent.mission,
  whatWeDoLead: bioagroContent.whatWeDoLead,
  companyBlurb: bioagroContent.companyBlurb,
  legalName: bioagroContent.legalName,
  sourceUrl: bioagroContent.sourceUrl,
  projects: bioagroContent.projects,
  services: bioagroContent.services,
  pillars: bioagroContent.projects.map((p) => ({ title: p.title, text: p.text })),
  products: teravalFromCanva,
  canva: teravalFromCanva,
  contact: bioagroContent.contact,
  cta: 'Explorar Teraval',
} as const

export const navItems = [
  { id: 'science', label: 'Ciencia', href: '#science' },
  { id: 'technology', label: 'Tecnología', href: '#technology' },
  { id: 'industries', label: 'Industrias', href: '#industries' },
  { id: 'solutions', label: 'Soluciones', href: '#solutions' },
  { id: 'xeniamap', label: 'XeniaMap', href: '#xeniamap' },
  { id: 'team', label: 'Equipo', href: '#team' },
] as const

export const ecosystemLinks = [
  { id: 'xenia', label: 'XenIA', to: '/', external: false },
  { id: 'teraval', label: 'Teraval', to: '/teraval', external: false },
  { id: 'xeniamap', label: 'XeniaMap', to: 'https://map.xeniagroup.co/', external: true },
] as const

export const teravalSite = {
  path: '/teraval',
  futureHost: 'teraval.xenia…',
  note: 'Experiencia independiente. Lista para subdominio o dominio propio.',
} as const

/** Única versión web activa. */
export const siteVersion = {
  id: 'scientific',
  path: '/',
  name: 'Futuro científico',
  concept: 'Científico / DeepTech / Investigación',
} as const
