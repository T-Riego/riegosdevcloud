'use client'
// components/layout/Footer.tsx

import { useLocale } from '@/context/LocaleContext'

export function Footer() {
  const { content } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="w-full py-12 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-black text-slate-900">RiegosDev</span>
          <p className="font-sans text-xs uppercase tracking-widest text-slate-500">
            © {year} RiegosDev. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex gap-8">
          <a className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-500 transition-colors" href="#">Privacidade</a>
          <a className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-500 transition-colors" href="#">Termos</a>
          <a className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-500 transition-colors" href="https://linkedin.com">LinkedIn</a>
          <a className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-500 transition-colors" href="https://github.com">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
