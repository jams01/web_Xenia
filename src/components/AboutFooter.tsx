import { Link } from 'react-router-dom'
import { logos } from '../content/site'
import {
  heritageLines,
  hydrocarbonCapabilities,
  xeniaAssets,
} from '../content/fromSources'
import { Reveal } from '../hooks/useReveal'
import { MediaFrame } from './MediaFrame'

export function HeritageSection() {
  return (
    <section id="heritage" className="scroll-mt-24 border-t border-white/5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-steel">Herencia de I+D</p>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">Líneas de I+D del ecosistema</h2>
          <p className="mt-3 max-w-2xl text-sm text-mist/65">
            Nomenclatura histórica Deep Science, alineada con la narrativa Canva de modelamiento e IA para agricultura,
            medio ambiente e hidrocarburos.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {heritageLines.map((line) => (
            <Reveal key={line.id} className="rounded-2xl border border-white/10 bg-[color:var(--panel)] p-5">
              <div className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--accent)]">{line.code}</div>
              <h3 className="mt-2 font-display text-lg text-white">{line.title}</h3>
              <p className="mt-2 text-sm text-steel">{line.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const solutionVisuals = [
  { label: 'Observación de la Tierra', src: xeniaAssets.solutions.industryEo, clear: true },
  { label: 'Inteligencia artificial', src: xeniaAssets.solutions.industryAi, clear: true },
  { label: 'Agricultura y ambiente', src: xeniaAssets.solutions.industryAgro, clear: true },
  { label: 'Hidrocarburos', src: xeniaAssets.solutions.industryHydro, clear: true, href: '#hidrocarburos' },
] as const

export function SolutionsSection() {
  return (
    <section id="solutions" className="scroll-mt-24 border-t border-white/5 pt-20 pb-10 md:pt-28 md:pb-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-steel">Soluciones</p>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
            Observación de la Tierra + IA + investigación + industria
          </h2>
          <p className="mt-4 max-w-2xl text-mist/70">
            Geovisor + IA para productividad agrícola, y software e inteligencia artificial para Oil &amp; Gas —
            del dato satelital a la decisión operativa.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {solutionVisuals.map((item, i) => {
            const card = (
              <>
                <MediaFrame src={item.src} alt={item.label} clear={item.clear} className="aspect-[4/3]" />
                <div className="p-5 text-center">
                  <div className="text-xs text-steel">0{i + 1}</div>
                  <div className="mt-2 font-display text-lg text-white">{item.label}</div>
                </div>
              </>
            )
            return (
              <Reveal
                key={item.label}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--panel)]"
              >
                {'href' in item && item.href ? (
                  <a
                    href={item.href}
                    className="block transition hover:bg-white/[0.02]"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(item.href.slice(1))?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      })
                    }}
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            )
          })}
        </div>

        <div id="hidrocarburos" className="scroll-mt-24">
          <Reveal className="mt-14">
            <h3 className="font-display text-2xl text-white">Capacidades en hidrocarburos</h3>
            <p className="mt-2 max-w-2xl text-sm text-mist/65">
              Software e inteligencia artificial para Oil &amp; Gas: registros, sísmica, núcleos y monitoreo.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            {hydrocarbonCapabilities.map((c) => (
              <Reveal key={c.title}>
                <article className="hydro-card group flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-[color:var(--panel)] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition duration-300 hover:-translate-y-1.5 hover:border-[color:var(--accent)]/45 hover:bg-white/[0.035] hover:shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                  <div className="overflow-hidden border-b border-white/8">
                    <MediaFrame
                      src={c.image}
                      alt={c.title}
                      clear
                      className="hydro-card__media aspect-[16/10]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h4 className="font-display text-base text-white md:text-lg">{c.title}</h4>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-steel transition-colors group-hover:text-mist/75">
                      {c.text}
                    </p>
                    <div className="hydro-card__details mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100">
                      <ul className="space-y-1.5 border-t border-white/10 pt-3">
                        {c.points.map((p) => (
                          <li key={p} className="flex gap-2 text-sm text-mist/70">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent)]" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-auto pt-4 text-[11px] uppercase tracking-[0.14em] text-[color:var(--accent)]/70 transition group-hover:text-[color:var(--accent)]">
                      <span className="group-hover:hidden">Pasar para detalle</span>
                      <span className="hidden group-hover:inline">Detalle del producto</span>
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/">
            <img src={logos.xenia} alt="XenIA" className="h-8 w-auto opacity-90" />
          </Link>
          <a href="https://xeniamap.ngrok.app/" target="_blank" rel="noreferrer">
            <img src={logos.xeniamap} alt="XeniaMap" className="h-8 w-auto opacity-90" />
          </a>
          <Link to="/teraval">
            <img src={logos.teraval} alt="Teraval" className="h-8 w-auto opacity-90" />
          </Link>
        </div>
        <p className="text-sm text-steel">
          © {new Date().getFullYear()} XenIA · DeepTech para soluciones reales
        </p>
      </div>
    </footer>
  )
}
