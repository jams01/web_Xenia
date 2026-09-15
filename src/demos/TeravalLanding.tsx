import { Link } from 'react-router-dom'
import { logos, teraval, teravalSite } from '../content/site'
import { teravalAssets } from '../content/fromSources'
import { Reveal, useScrolled } from '../hooks/useReveal'
import { useState } from 'react'

function TeravalNav() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#productos', label: 'Productos' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#comunidades', label: 'Comunidades' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-white/10 bg-[#06110c]/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/teraval" aria-label="Teraval">
          <img src={logos.teraval} alt="Teraval" className="h-9 w-auto" />
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white">
              {l.label}
            </a>
          ))}
          <Link to="/" className="text-sm text-emerald-200/80 hover:text-white">
            XenIA →
          </Link>
        </nav>
        <button
          type="button"
          className="rounded border border-white/20 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menú
        </button>
      </div>
      {open ? (
        <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Link to="/" onClick={() => setOpen(false)}>
            XenIA →
          </Link>
        </div>
      ) : null}
    </header>
  )
}

/** Landing Teraval = contenido BioAgro montado bajo marca Teraval (+ Canva). */
export function TeravalLanding() {
  const p = teraval.products

  return (
    <div className="teraval-shell min-h-screen bg-[#06110c] text-[#e8f2ea]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(52,180,110,0.18),transparent_50%)]" />
      <TeravalNav />

      <main className="relative">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-5 pb-20 pt-32 md:px-8 md:pt-40">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/60">
                Ecosistema XenIA · contenido desde BioAgro
              </p>
              <img src={logos.teraval} alt="Teraval" className="mt-6 h-14 w-auto md:h-16" />
              <p className="mt-4 text-sm text-emerald-200/70">{teraval.tagline}</p>
              <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-white md:text-5xl">
                {teraval.pitch}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/70">{teraval.role}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#proyectos"
                  className="rounded-full bg-emerald-300 px-5 py-3 text-sm font-medium text-[#06110c]"
                >
                  Ver proyectos
                </a>
                <a
                  href="#productos"
                  className="rounded-full border border-white/25 px-5 py-3 text-sm text-white"
                >
                  Productos
                </a>
                <Link
                  to="/"
                  className="rounded-full border border-emerald-300/40 px-5 py-3 text-sm text-emerald-100"
                >
                  Ir a XenIA
                </Link>
              </div>
              <p className="mt-6 text-xs text-white/40">
                {teravalSite.note} Fuente: {teraval.sourceUrl}
              </p>
            </Reveal>
            <Reveal>
              <img
                src={teravalAssets.heroField}
                alt="Agricultura regenerativa Teraval"
                className="w-full rounded-2xl border border-white/10 object-cover brightness-110"
                loading="eager"
              />
            </Reveal>
          </div>
        </section>

        {/* Nosotros / misión BioAgro */}
        <section id="nosotros" className="scroll-mt-24 border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/60">Nosotros</p>
              <h2 className="mt-3 font-display text-3xl text-white">Cómo queremos cambiar el mundo</h2>
              <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">{teraval.purpose}</p>
              <p className="mt-6 max-w-3xl text-sm text-white/55">{teraval.companyBlurb}</p>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {p.problems.map((item) => (
                <Reveal key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-display text-lg text-white">{item}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {p.offers.map((o) => (
                <Reveal key={o} className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                  <p className="text-sm text-emerald-100/90">{o}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos BioAgro */}
        <section id="proyectos" className="scroll-mt-24 border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/60">Nuestros proyectos</p>
              <h2 className="mt-3 font-display text-3xl text-white">{teraval.whatWeDoLead}</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {teraval.projects.map((project) => (
                <Reveal
                  key={project.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10] w-full object-cover brightness-110"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-xl text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{project.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Productos Canva */}
        <section id="productos" className="scroll-mt-24 border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/60">Productos</p>
                <h2 className="mt-3 font-display text-3xl text-white">{p.productsTitle}</h2>
                <p className="mt-4 text-white/70">{p.productsLead}</p>
                <p className="mt-4 font-display text-2xl text-emerald-300">{p.productsMetric}</p>
                <p className="mt-4 text-sm text-white/65">{p.productsBody}</p>
                <p className="mt-6 text-xs uppercase tracking-wider text-white/40">Materia prima</p>
                <p className="mt-2 text-sm text-white/70">{p.rawMaterials}</p>
                <p className="mt-8 font-display text-xl text-orange-300">{p.slogan}</p>
              </Reveal>
              <Reveal>
                <img
                  src={teravalAssets.canvaProduct}
                  alt="Productos minerales Teraval"
                  className="w-full rounded-2xl border border-white/10 object-cover brightness-110"
                  loading="lazy"
                />
              </Reveal>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {p.productLines.map((line) => (
                <Reveal key={line.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-display text-xl text-white">{line.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {line.items.map((item) => (
                      <li key={item} className="text-sm text-white/65">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios BioAgro */}
        <section id="servicios" className="scroll-mt-24 border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/60">Servicios</p>
              <h2 className="mt-3 font-display text-3xl text-white">Lo que hacemos en campo</h2>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {teraval.services.map((s) => (
                <Reveal
                  key={s}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center"
                >
                  <span className="font-display text-lg text-white">{s}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comunidades Canva */}
        <section id="comunidades" className="scroll-mt-24 border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <Reveal>
                <h2 className="font-display text-3xl text-white">{p.community.title}</h2>
                <p className="mt-2 text-emerald-200/80">{p.community.subtitle}</p>
                <p className="mt-5 text-white/70">{p.community.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.community.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-white/65">{p.community.education}</p>
                <p className="mt-2 font-display text-lg text-emerald-300">{p.community.goal2026}</p>
              </Reveal>
              <Reveal>
                <img
                  src={teravalAssets.canvaCommunity}
                  alt="Centros de regeneración e innovación del suelo"
                  className="w-full rounded-2xl border border-white/10 object-cover brightness-110"
                  loading="lazy"
                />
              </Reveal>
            </div>
            <Reveal className="mt-14">
              <h3 className="font-display text-2xl text-white">Oportunidades a desarrollar</h3>
              <ol className="mt-6 space-y-3">
                {p.opportunities.map((o, i) => (
                  <li key={o} className="flex gap-3 text-white/70">
                    <span className="text-emerald-300">0{i + 1}</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* Galería */}
        <section className="border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <h2 className="font-display text-3xl text-white">Galería</h2>
              <p className="mt-3 text-sm text-white/55">Imágenes BioAgro adaptadas a Teraval.</p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {teravalAssets.gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="aspect-[4/3] w-full rounded-xl border border-white/10 object-cover brightness-110"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 border-t border-white/10 py-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <h2 className="font-display text-3xl text-white">Contacto</h2>
              <p className="mt-4 text-white/70">{teraval.contact.place}</p>
              <p className="mt-2 text-white/70">
                {teraval.contact.phone} ·{' '}
                <a className="text-emerald-200 hover:underline" href={`mailto:${teraval.contact.email}`}>
                  {teraval.contact.email}
                </a>
              </p>
              <a
                href={teraval.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-emerald-300 px-5 py-3 text-sm font-medium text-[#06110c]"
              >
                WhatsApp
              </a>
              <p className="mt-6 text-xs text-white/40">
                {teraval.legalName} · Contenido migrado desde BioAgro hacia la marca Teraval.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <img src={logos.teraval} alt="" className="h-8 w-auto opacity-80" />
            <p className="mt-2 text-xs text-white/40">{teraval.legalName}</p>
          </div>
          <div className="flex gap-4 text-sm text-white/50">
            <Link to="/" className="hover:text-white">
              XenIA
            </Link>
            <a href="https://xeniamap.ngrok.app/" target="_blank" rel="noreferrer" className="hover:text-white">
              XeniaMap
            </a>
            <a href={teraval.sourceUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              BioAgro
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
