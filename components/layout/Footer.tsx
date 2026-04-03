'use client'
// components/layout/Footer.tsx
// FOOT-01: Logo, quick links, brand tagline, copyright
// FOOT-02: Social placeholder links (href='#' until Phase 4 fills real URLs)
// T-03-02: All external links will use rel="noopener noreferrer" when real URLs added in Phase 4

import { useLocale } from '@/context/LocaleContext'

// Social media placeholder links — real URLs added in Phase 4
const SOCIAL_LINKS = [
  { key: 'instagram' as const, href: '#', icon: 'IG' },
  { key: 'linkedin'  as const, href: '#', icon: 'in' },
  { key: 'github'    as const, href: '#', icon: 'GH' },
]

export function Footer() {
  const { content } = useLocale()

  const navLinks = [
    { key: 'sobre',       label: content.nav.links.sobre },
    { key: 'servicos',    label: content.nav.links.servicos },
    { key: 'portfolio',   label: content.nav.links.portfolio },
    { key: 'depoimentos', label: content.nav.links.depoimentos },
    { key: 'processo',    label: content.nav.links.processo },
    { key: 'contato',     label: content.nav.links.contato },
  ]

  return (
    <footer className="bg-surface border-t border-background/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand column: logo + tagline — FOOT-01 */}
          <div className="flex flex-col gap-3">
            <a
              href="/"
              className="font-heading font-bold text-xl text-primary tracking-tight"
              aria-label="Riegos Dev — Home"
            >
              Riegos{' '}
              <span className="text-accent">Dev</span>
            </a>
            <p className="font-body text-sm text-secondary leading-relaxed max-w-xs">
              {content.footer.tagline}
            </p>
          </div>

          {/* Quick links column — FOOT-01 */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-medium text-sm text-primary uppercase tracking-wider">
              {content.footer.quickLinks}
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    <a
                      href={`#${link.key}`}
                      className="font-body text-sm text-secondary hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social links column — FOOT-02 */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading font-medium text-sm text-primary uppercase tracking-wider">
              Social
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  aria-label={content.footer.social[social.key]}
                  className="w-9 h-9 rounded border border-surface flex items-center justify-center font-body text-xs font-medium text-secondary hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright row */}
        <div className="mt-8 pt-6 border-t border-background/60">
          <p className="font-body text-xs text-secondary text-center">
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
