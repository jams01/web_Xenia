import { sciencePipeline } from '../content/site'
import { xeniaAssets } from '../content/fromSources'
import { Reveal } from '../hooks/useReveal'
import { MediaFrame } from './MediaFrame'

export function ScienceToSolutions() {
  return (
    <section id="science" className="scroll-mt-24 border-t border-white/5 pt-8 pb-14 md:pt-10 md:pb-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.2em] text-steel">De la ciencia a las soluciones</p>
            <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
              La cadena que define a XenIA
            </h2>
            <p className="mt-4 text-mist/70">
              Cada etapa convierte evidencia científica en capacidad operativa. No es un funnel comercial: es un
              pipeline de inteligencia.
            </p>
            <MediaFrame
              src={xeniaAssets.solutions.orbit}
              alt="Pipeline de inteligencia XenIA — órbita y datos planetarios"
              clear
              className="mt-8 hidden aspect-[4/3] rounded-2xl border border-white/10 lg:block"
            />
          </Reveal>

          <div className="relative space-y-0">
            <div className="absolute bottom-4 left-[11px] top-4 w-px bg-gradient-to-b from-[color:var(--accent)]/60 via-white/15 to-transparent" />
            {sciencePipeline.map((step, i) => (
              <Reveal key={step.id} className="relative flex gap-5 pb-10 last:pb-0">
                <div className="relative z-10 mt-1.5 h-[22px] w-[22px] shrink-0 rounded-full border border-[color:var(--accent)] bg-ink shadow-[0_0_16px_rgba(126,182,255,0.35)]" />
                <div className="min-w-0 flex-1 border-b border-white/5 pb-10 last:border-0">
                  <div className="text-xs text-[color:var(--accent)]">0{i + 1}</div>
                  <h3 className="mt-2 font-display text-2xl text-white">{step.label}</h3>
                  <p className="mt-2 max-w-md text-sm text-steel">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
