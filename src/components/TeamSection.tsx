import { teamMembers, clients } from '../content/fromSources'
import { Reveal } from '../hooks/useReveal'

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-24 border-t border-white/5 pt-10 pb-20 md:pt-12 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-steel">Clientes</p>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">Confían en nosotros</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {clients.map((c) => (
              <div
                key={c.name}
                className="flex min-h-[88px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white px-3 py-4"
                title={c.name}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className={`w-auto max-w-full object-contain ${
                    'scale' in c && c.scale === 'lg'
                      ? 'max-h-16 md:max-h-[4.5rem]'
                      : 'max-h-12 md:max-h-14'
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-steel">Equipo</p>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">Nuestro equipo</h2>
          <p className="mt-3 max-w-2xl text-sm text-mist/65">
            Liderazgo científico y operativo del ecosistema Teraval &amp; XenIA.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((m) => (
            <Reveal key={m.name} className="rounded-2xl border border-white/10 bg-[color:var(--panel)] p-5">
              <img
                src={m.photo}
                alt={m.name}
                className="mb-4 h-28 w-28 rounded-full object-cover object-top ring-1 ring-white/10"
                loading="lazy"
              />
              <div className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--accent)]">{m.role}</div>
              <h3 className="mt-2 font-display text-xl text-white">{m.name}</h3>
              <ul className="mt-4 space-y-2">
                {m.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-mist/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
