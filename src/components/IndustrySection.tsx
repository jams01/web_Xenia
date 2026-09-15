import { useState } from 'react'
import { industries } from '../content/site'
import { xeniaAssets } from '../content/fromSources'
import { Reveal } from '../hooks/useReveal'

type IndustryId = (typeof industries)[number]['id']

const industryImages: Record<IndustryId, string> = {
  agriculture: xeniaAssets.industries.agriculture,
  disaster: xeniaAssets.industries.disaster,
  ogm: xeniaAssets.industries.ogm,
  urban: xeniaAssets.industries.urban,
  carbon: xeniaAssets.industries.carbon,
}

function scrollToHref(href: string) {
  const id = href.replace(/^#/, '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** Industrias estilo Pixxel: paneles verticales con overlay y label centrado. */
export function IndustrySection() {
  const [active, setActive] = useState<IndustryId>(industries[0].id)
  const current = industries.find((i) => i.id === active) ?? industries[0]
  const detailHref = 'href' in current && current.href ? current.href : '#solutions'

  return (
    <section id="industries" className="scroll-mt-24 border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-steel">Industrias</p>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
            Inteligencia aplicable a cada industria
          </h2>
        </Reveal>
      </div>

      <div className="mt-10 px-3 md:px-6 lg:px-8">
        <div className="pixxel-row mx-auto flex max-w-7xl gap-1.5 overflow-x-auto pb-2 md:gap-2 md:overflow-visible">
          {industries.map((ind) => {
            const on = ind.id === active
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => {
                  setActive(ind.id)
                  if ('href' in ind && ind.href) scrollToHref(ind.href)
                }}
                aria-pressed={on}
                className={`pixxel-panel group relative min-w-[148px] flex-1 overflow-hidden transition-[flex] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] ${
                  on ? 'flex-[1.55]' : 'flex-1 hover:flex-[1.25]'
                }`}
              >
                <img
                  src={industryImages[ind.id]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/70" />
                <div
                  className={`absolute inset-0 transition ${
                    on ? 'bg-[color:var(--accent)]/10' : 'bg-transparent'
                  }`}
                />
                <span className="relative z-10 flex max-w-[14rem] flex-col items-center gap-1.5 px-2 text-center">
                  <span className="font-display text-[10px] font-medium uppercase leading-snug tracking-[0.16em] text-white sm:text-[11px] md:text-xs lg:text-sm">
                    {ind.label}
                  </span>
                  {'caption' in ind && ind.caption ? (
                    <span className="whitespace-pre-line text-[13px] font-normal normal-case leading-snug tracking-normal text-white/85 sm:text-sm md:text-[15px]">
                      {ind.caption}
                    </span>
                  ) : null}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-5 md:px-8">
        <Reveal key={current.id} className="border-t border-white/10 pt-8 md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent)]">{current.label}</p>
            <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">{current.titleEs}</h3>
            <p className="mt-3 text-mist/75">{current.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {current.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-steel">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a
            href={detailHref}
            onClick={(e) => {
              if (detailHref.startsWith('#')) {
                e.preventDefault()
                scrollToHref(detailHref)
              }
            }}
            className="mt-6 inline-block shrink-0 text-sm text-[color:var(--accent)] hover:underline md:mt-0"
          >
            {current.id === 'ogm' ? 'Ver hidrocarburos →' : 'Ver soluciones →'}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
