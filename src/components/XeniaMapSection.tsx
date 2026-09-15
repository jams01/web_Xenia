import { logos, xeniamap } from '../content/site'
import { xeniaAssets } from '../content/fromSources'
import { Reveal } from '../hooks/useReveal'
import { MediaFrame } from './MediaFrame'

export function XeniaMapSection() {
  return (
    <section id="xeniamap" className="scroll-mt-24 border-t border-white/5 pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1724] to-[#07090d] p-8 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <img src={logos.xeniamap} alt="XeniaMap" className="h-12 w-auto" />
              <p className="mt-6 font-display text-lg text-[color:var(--accent)]">{xeniamap.concept}</p>
              <p className="mt-4 max-w-md text-mist/80">{xeniamap.focus}</p>
              <p className="mt-3 max-w-md text-sm text-mist/65">{xeniamap.description}</p>
              <a
                href={xeniamap.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition hover:bg-mist"
              >
                {xeniamap.cta}
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <MediaFrame
                src={xeniaAssets.solutions.map}
                alt="Inteligencia geoespacial en el mapa"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-6 rounded-xl border border-dashed border-white/20" />
              <div className="absolute bottom-8 left-8 right-8 z-10 text-sm text-mist/80">
                Capas geoespaciales · AOI · Inteligencia en el mapa
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
