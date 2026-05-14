'use client'

import { CheckCircle2 } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { TrackedWhatsAppLink } from '@/components/analytics/TrackedWhatsAppLink'

export function DiagnosticSection() {
  const { content } = useLocale()
  const diagnosticWhatsAppHref = `https://wa.me/${content.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(content.contact.whatsappMessage)}`

  return (
    <section id="diagnostico" data-section-id="diagnostico" className="py-20 px-6 bg-surface-container-lowest">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <div className="space-y-6">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            {content.diagnostic.sectionTitle}
          </span>
          <h2 className="font-h2 text-h2 text-on-background max-w-3xl">
            {content.diagnostic.headline}
          </h2>
          <p className="text-secondary text-body-md max-w-2xl">
            {content.diagnostic.description}
          </p>
          <TrackedWhatsAppLink
            href={diagnosticWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            ctaId="diagnostic_whatsapp"
            ctaLocation="diagnostic"
            className="inline-flex items-center justify-center px-8 py-4 accent-gradient text-white rounded-xl font-bold active:scale-95 transition-transform"
          >
            {content.diagnostic.cta}
          </TrackedWhatsAppLink>
        </div>
        <aside className="bg-white p-8 rounded-3xl border border-outline-variant/30 soft-card-shadow space-y-6">
          <h3 className="font-h3 text-h3 text-on-background">{content.diagnostic.outcomesTitle}</h3>
          <ul className="space-y-4">
            {content.diagnostic.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-secondary">{outcome}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-secondary border-t border-outline-variant/30 pt-5">
            {content.diagnostic.note}
          </p>
        </aside>
      </div>
    </section>
  )
}
