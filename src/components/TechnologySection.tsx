import { technologies } from '../content/site'
import { xeniaAssets } from '../content/fromSources'
import { Reveal } from '../hooks/useReveal'
import { MediaFrame } from './MediaFrame'

const techImages: Record<(typeof technologies)[number]['id'], string> = {
  ai: xeniaAssets.tech.ai,
  eo: xeniaAssets.tech.eo,
  lidar: xeniaAssets.tech.lidar,
  geo: xeniaAssets.tech.geo,
  sci: xeniaAssets.tech.sci,
}

export function TechnologySection() {
  return (
    <section id="technology" className="scroll-mt-24 border-t border-white/5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-steel">Tecnología</p>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">Capacidades tecnológicas</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <Reveal
              key={tech.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--panel)] transition hover:border-[color:var(--accent)]/40"
            >
              {tech.id === 'lidar' ? (
                <div className="media-frame media-frame--clear aspect-[16/10] border-b border-white/5">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={xeniaAssets.tech.lidarPoster}
                    aria-label="LiDAR — nube de puntos RGB"
                  >
                    <source src={xeniaAssets.tech.lidarVideo} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <MediaFrame
                  src={techImages[tech.id]}
                  alt={tech.title}
                  clear={tech.id === 'eo' || tech.id === 'geo'}
                  className="aspect-[16/10] border-b border-white/5"
                />
              )}
              <div className="p-6">
                <h3 className="font-display text-xl text-white">{tech.title}</h3>
                <ul className="mt-4 space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-mist/70">
                      <span className="h-1 w-1 rounded-full bg-[color:var(--accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
