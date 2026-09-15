import { brand, xeniamap } from '../content/site'
import { Reveal } from '../hooks/useReveal'
import { HeroDeepTechVisual } from './HeroDeepTechVisual'

/** Hero XenIA — logo vive en el navbar (mismo tamaño). */
export function ScientificHero() {
  return (
    <section className="relative overflow-hidden pt-[4.75rem] md:pt-[5.25rem]">
      <div className="pointer-events-none absolute inset-0" style={{ background: 'var(--glow)' }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(126,182,255,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 orbital-grid opacity-30" />
      <div className="pointer-events-none absolute -right-24 top-24 h-[420px] w-[420px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-8 top-40 h-[280px] w-[280px] rounded-full border border-[color:var(--accent)]/25" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 pb-6 pt-2 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:px-8 md:pb-8 md:pt-3">
        <Reveal>
          <h1 className="font-display text-[2.35rem] leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            {brand.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mist/75 md:text-lg">{brand.subtitle}</p>
          <p className="mt-4 font-display text-sm tracking-wide text-[color:var(--accent)]">{brand.narrative}</p>
          <div className="mt-7">
            <a
              href={xeniamap.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition hover:bg-mist"
            >
              Explorar XeniaMap
            </a>
          </div>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-md">
          <HeroDeepTechVisual />
        </Reveal>
      </div>
    </section>
  )
}
