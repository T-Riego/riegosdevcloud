'use client'
// context/LocaleContext.tsx
// D-04: Pure React Context + localStorage — no next-intl
// D-06: Default PT-BR; persist preference in localStorage key 'locale'
// D-07: Toggle switches instantly without page reload

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { ptBR } from '@/lib/content/pt-BR'
import { en } from '@/lib/content/en'
import type { SiteContent } from '@/lib/content/pt-BR'
import type { Locale } from '@/lib/types'

interface LocaleContextType {
  locale: Locale
  content: SiteContent
  toggleLocale: () => void
}

const LocaleContext = createContext<LocaleContextType | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  // D-06: Initial state is PT-BR so server and client initial render match (no hydration mismatch)
  const [locale, setLocale] = useState<Locale>('pt-BR')

  useEffect(() => {
    // Read persisted preference after mount (client-only)
    // T-02-01: Validate stored value — any unexpected value is silently ignored, falls back to PT-BR
    const stored = localStorage.getItem('locale') as Locale | null
    if (stored === 'pt-BR' || stored === 'en') {
      setLocale(stored)
    }
  }, [])

  const toggleLocale = () => {
    // D-07: Instant switch — no page reload
    const next: Locale = locale === 'pt-BR' ? 'en' : 'pt-BR'
    setLocale(next)
    localStorage.setItem('locale', next) // D-06: persist
  }

  // ptBR uses `as const` (readonly), SiteContent is the mutable-widened shape.
  // Cast is safe: ptBR satisfies the structural shape — only mutability differs.
  const content: SiteContent = (locale === 'pt-BR' ? ptBR : en) as SiteContent

  return (
    <LocaleContext.Provider value={{ locale, content, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

// T-02-03: Fast fail — throws descriptive error if used outside LocaleProvider
export function useLocale(): LocaleContextType {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
