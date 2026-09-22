# XenIA Design System

## Identidad

- **Marca principal:** XenIA
- **Lema:** Más allá de la investigación científica, a investigación aplicada a soluciones reales.
- **Narrativa:** Science → Data → Intelligence → Technology → Real-world Solutions
- **Ecosistema:** XenIA · XeniaMap · Teraval

## Logos oficiales

Ubicación: `/logo` (también servidos en `/public/logo`)

| Marca | Archivos |
|-------|----------|
| XenIA | `xenia_logotipo_positivo@3x.png`, `xenia_logotipo_color@3x.png`, `xenia_logo_edition.svg` |
| XeniaMap | `xenia_MAP.png` |
| Teraval | `teraval_logo_hrz_positivo@3x.png`, `teraval_logo_hrz_color@3x.png` |

No distorsionar proporciones ni recolorear arbitrariamente.

## Paleta

| Token | Uso |
|-------|-----|
| `#07090d` ink | Fondo base |
| `#0c1017` carbon | Superficies |
| `#151b26` graphite | Paneles |
| `#8b95a8` steel | Texto secundario |
| `#d7dde8` mist | Texto principal |
| Accent por demo | Scientific `#7eb6ff` · Planetary `#4cc9f0` · Industrial `#e8eef8` |

## Tipografía

- **Display:** Space Grotesk (títulos)
- **Body:** IBM Plex Sans (contenido)

## Ecosistema (sitios separados)

| Sitio | Ruta actual | Futuro |
|-------|-------------|--------|
| XenIA | `/demo/scientific` (refinada) | `www` / raíz |
| Teraval | `/teraval` | `teraval.xenia…` o dominio propio |
| XeniaMap | externo | https://map.xeniagroup.co/ |

**Teraval no vive dentro del landing XenIA.** Solo aparece como enlace de ecosistema.

## Tres conceptos (demos)

1. **Scientific Future** (`/demo/scientific`) — **en refinamiento activo** (hero orbital, manifesto, pipeline vertical).
2. **Planetary Intelligence** (`/demo/planetary`) — borrador.
3. **Industrial Intelligence** (`/demo/industrial`) — borrador.

Selector: `/`


## Componentes

Navbar, Hero, ScienceToSolutions, TechnologySection, IndustrySection, SolutionsSection, XeniaMapSection, TeravalSection, AboutSection, Footer.

## Contenido

Fuente editable: `src/content/site.ts`

- Teraval adaptado desde [bioagro.com.co](https://bioagro.com.co/) (BioAgro → Teraval).
- `TODO[CANVA]`: incorporar textos del deck Canva cuando estén disponibles.
- XeniaMap CTA → https://map.xeniagroup.co/

## Motion

Reveal on scroll (IntersectionObserver). Sin WebGL ni partículas pesadas.

## Stack

React + Vite + TypeScript + Tailwind CSS v4 + React Router.
