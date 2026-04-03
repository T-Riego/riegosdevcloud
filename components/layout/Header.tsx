'use client'
// components/layout/Header.tsx
// D-13: Sticky header — stays fixed at top on scroll
// D-09: Logo is styled text in Space Grotesk Bold with cyan accent on 'Dev'
// D-10: Nav links: Sobre, Serviços, Portfólio, Depoimentos, Processo, Contato
// D-11: PT/EN toggle at right side (desktop), always visible
// D-12: Mobile: hamburger → overlay with nav links + toggle
// T-03-03: body scroll lock cleanup prevents permanent lock on unmount

import { useState, useEffect } from 'react'
import { useLocale } from '@/context/LocaleContext'

// Section anchor IDs — must match the id attributes added to sections in Phase 2
const NAV_SECTION_IDS = ['sobre', 'servicos', 'portfolio', 'depoimentos', 'processo', 'contato'] as const

export function Header() {
  const { content, toggleLocale } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Scroll detection — passive listener for performance
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // D-12: Body scroll lock when mobile menu is open (required for iOS Safari)
  // T-03-03: Cleanup restores overflow on unmount to prevent permanent scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { key: 'sobre',       label: content.nav.links.sobre },
    { key: 'servicos',    label: content.nav.links.servicos },
    { key: 'portfolio',   label: content.nav.links.portfolio },
    { key: 'depoimentos', label: content.nav.links.depoimentos },
    { key: 'processo',    label: content.nav.links.processo },
    { key: 'contato',     label: content.nav.links.contato },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-surface'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* D-09: Logo — "Riegos " in white, "Dev" in cyan */}
          <a
            href="/"
            className="font-heading font-bold text-xl text-primary tracking-tight"
            aria-label="Riegos Dev — Home"
          >
            Riegos{' '}
            <span className="text-accent">Dev</span>
          </a>

          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`#${link.key}`}
                className="font-body text-sm text-secondary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: toggle (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-3">
            {/* D-11: Language toggle — always visible on desktop */}
            <button
              onClick={toggleLocale}
              className="hidden md:flex items-center px-3 py-1.5 rounded border border-surface text-sm font-body text-secondary hover:border-accent hover:text-accent transition-colors duration-200"
              aria-label={`Switch to ${content.nav.langToggle}`}
            >
              {content.nav.langToggle}
            </button>

            {/* D-12: Hamburger button — visible on mobile only */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {/* 3-line hamburger with transform animation */}
              <span
                className={`block w-5 h-0.5 bg-primary transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-primary transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* D-12: Mobile overlay menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-start pt-8 gap-6"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav className="flex flex-col items-center gap-6 w-full px-8" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`#${link.key}`}
                className="font-body text-lg text-secondary hover:text-accent transition-colors duration-200 w-full text-center py-2 border-b border-surface"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language toggle in mobile menu */}
          <button
            onClick={() => { toggleLocale(); setMenuOpen(false) }}
            className="px-6 py-2.5 rounded border border-surface text-base font-body text-secondary hover:border-accent hover:text-accent transition-colors duration-200"
            aria-label={`Switch to ${content.nav.langToggle}`}
          >
            {content.nav.langToggle}
          </button>
        </div>
      )}
    </header>
  )
}
