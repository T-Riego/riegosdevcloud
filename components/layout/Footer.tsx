'use client'

// components/layout/Footer.tsx

import { useLocale } from '@/context/LocaleContext'

export function Footer() {
  const { content } = useLocale()
  const year = new Date().getFullYear()
  const socialLinks = [
    {
      href: 'https://instagram.com',
      label: content.footer.social.instagram,
    },
    {
      href: 'https://wa.me/5531988969661',
      label: content.footer.social.whatsapp,
    },
    {
      href: 'https://linkedin.com',
      label: content.footer.social.linkedin,
    },
  ]

  return (
    <footer className="w-full py-12 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-black text-slate-900">RiegosDev</span>
          <p className="font-sans text-sm text-slate-500">{content.footer.tagline}</p>
          <p className="font-sans text-xs uppercase tracking-widest text-slate-500">
            &copy; {year} RiegosDev. {content.footer.copyright}
          </p>
        </div>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-500 transition-colors"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
