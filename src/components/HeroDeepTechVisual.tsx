import { xeniaAssets } from '../content/fromSources'

/**
 * Animación DeepTech del hero: órbita + barrido satelital + AOI + HUD.
 * Sin marcas Teraval; usa imagen satelital limpia.
 */
export function HeroDeepTechVisual() {
  return (
    <div className="hero-orbit relative mx-auto aspect-square w-full max-w-md" aria-hidden>
      <div className="absolute inset-0 rounded-[1.35rem] border border-white/15 bg-[#05080f] shadow-[0_0_60px_rgba(126,182,255,0.12)] overflow-hidden">
        {/* Satélite base con ken-burns */}
        <div className="hero-orbit__sat absolute inset-0">
          <img
            src={xeniaAssets.hero.deeptech}
            alt=""
            className="h-full w-full object-cover opacity-90"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Tinte DeepTech */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(126,182,255,0.22),transparent_45%),linear-gradient(180deg,rgba(7,9,13,0.15),rgba(7,9,13,0.55))]" />

        {/* Grilla técnica */}
        <div className="hero-orbit__grid absolute inset-0 opacity-40" />

        {/* Barrido de radar */}
        <div className="hero-orbit__scan absolute inset-0" />

        {/* AOI animado */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon
            className="hero-orbit__aoi"
            points="28,34 58,30 62,58 36,64"
            fill="rgba(126,182,255,0.12)"
            stroke="rgba(190,220,255,0.95)"
            strokeWidth="0.6"
          />
          <circle className="hero-orbit__ping" cx="45" cy="46" r="1.2" fill="#fff" />
          <circle className="hero-orbit__ping hero-orbit__ping--delay" cx="55" cy="52" r="1" fill="#7eb6ff" />
        </svg>

        {/* Anillos orbitales */}
        <div className="pointer-events-none absolute inset-[6%]">
          <div className="hero-orbit__ring absolute inset-0 rounded-full border border-white/15" />
          <div className="hero-orbit__ring hero-orbit__ring--dashed absolute inset-[10%] rounded-full border border-dashed border-[color:var(--accent)]/45" />
          <div className="hero-orbit__ring hero-orbit__ring--slow absolute inset-[22%] rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-[18%] h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(126,182,255,0.9)]" />
        </div>

        {/* HUD */}
        <div className="absolute left-3 top-3 rounded-md border border-white/15 bg-black/35 px-2.5 py-1.5 backdrop-blur-sm">
          <div className="text-[9px] uppercase tracking-[0.16em] text-[color:var(--accent)]">XenIA · Live</div>
          <div className="mt-0.5 font-display text-[11px] text-white">Geovisor + IA</div>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          <div className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1.5 backdrop-blur-sm">
            <div className="text-[9px] text-steel">AOI · Sentinel-2</div>
            <div className="font-display text-xs text-white">NDVI · change detect</div>
          </div>
          <div className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1.5 text-right backdrop-blur-sm">
            <div className="hero-orbit__pulse-dot mx-auto mb-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
            <div className="text-[9px] uppercase tracking-wider text-mist/70">Scan</div>
          </div>
        </div>

        {/* Esquinas HUD */}
        <span className="hero-orbit__corner hero-orbit__corner--tl" />
        <span className="hero-orbit__corner hero-orbit__corner--tr" />
        <span className="hero-orbit__corner hero-orbit__corner--bl" />
        <span className="hero-orbit__corner hero-orbit__corner--br" />
      </div>
    </div>
  )
}
