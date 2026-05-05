'use client'

import { useState, useEffect } from 'react'
import { useLocale } from '@/context/LocaleContext'

export function Header() {
  const { content, toggleLocale } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { key: 'servicos',    label: content.nav.links.servicos },
    { key: 'portfolio',   label: content.nav.links.portfolio },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'border-b border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold tracking-tighter text-slate-900">
            RiegosDev
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`#${link.key}`}
                className="text-slate-600 hover:text-slate-900 transition-colors font-sans antialiased text-sm tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button 
            onClick={toggleLocale}
            className="hidden sm:block text-slate-600 font-sans text-sm font-semibold active:scale-95 transition-transform"
          >
            {content.nav.langToggle}
          </button>
          
          <a 
            href="https://wa.me/5531988969661?text=Ol%C3%A1%2C+vim+pelo+site+e+tenho+interesse+em+seus+servi%C3%A7os."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-primary-container text-on-primary-container px-5 py-2 rounded-full font-sans text-sm font-bold active:scale-95 transition-transform accent-gradient"
          >
            Falar com Especialista
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 ml-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-start pt-8 gap-6 border-t border-slate-200/50">
          <nav className="flex flex-col items-center gap-6 w-full px-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`#${link.key}`}
                className="text-lg text-slate-600 font-medium w-full text-center py-2 border-b border-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => { toggleLocale(); setMenuOpen(false) }}
            className="px-6 py-2.5 rounded border border-slate-200 text-base font-medium text-slate-600 mt-4"
          >
            {content.nav.langToggle}
          </button>
        </div>
      )}
    </nav>
  )
}
