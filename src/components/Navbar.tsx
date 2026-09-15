import { useState } from 'react'
import { Link } from 'react-router-dom'
import { brand, ecosystemLinks, logos, navItems, xeniamap } from '../content/site'
import { useScrolled } from '../hooks/useReveal'

function LocationIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

export function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-[#07090d]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link to="/" className="shrink-0" aria-label="XenIA">
          <img src={logos.xenia} alt="XenIA" className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a key={item.id} href={item.href} className="text-sm text-mist/70 transition hover:text-white">
              {item.label}
            </a>
          ))}
          <div className="mx-1 h-4 w-px bg-white/15" aria-hidden />
          {ecosystemLinks
            .filter((l) => l.id !== 'xenia')
            .map((link) =>
              link.external ? (
                <a
                  key={link.id}
                  href={link.to}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-mist/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.id} to={link.to} className="text-sm text-mist/70 transition hover:text-white">
                  {link.label}
                </Link>
              ),
            )}
          <a
            href={xeniamap.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-mist"
          >
            <LocationIcon />
            Xenia Map
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md border border-white/15 px-3 py-2 text-sm xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menú
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-ink/95 px-5 py-4 xl:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm text-mist/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="my-2 border-t border-white/10 pt-3">
              <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-steel">Ecosistema</p>
              {ecosystemLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.id}
                    href={link.to}
                    target="_blank"
                    rel="noreferrer"
                    className="block py-1.5 text-sm text-mist/80"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.id}
                    to={link.to}
                    className="block py-1.5 text-sm text-mist/80"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
            <a
              href={xeniamap.url}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink"
            >
              <LocationIcon />
              Xenia Map
            </a>
            <p className="pt-2 text-xs text-steel">{brand.name} · sitios separados</p>
          </div>
        </div>
      ) : null}
    </header>
  )
}
