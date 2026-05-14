'use client'

import { useLocale } from '@/context/LocaleContext'
import { TrackedWhatsAppLink } from '@/components/analytics/TrackedWhatsAppLink'

export function CtaSection() {
  const { content } = useLocale()
  const diagnosticWhatsAppHref = `https://wa.me/${content.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(content.contact.whatsappMessage)}`

  return (
    <section data-section-id="final_cta" className="box-border w-full max-w-full overflow-x-hidden px-5 py-20 sm:px-6">
      <div className="box-border w-full max-w-5xl mx-auto bg-primary-container rounded-3xl p-6 text-center space-y-7 relative overflow-hidden accent-gradient sm:p-10 md:p-20">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute left-0 top-0 h-40 w-40 bg-white rounded-full blur-[80px] sm:h-64 sm:w-64"></div>
          <div className="absolute bottom-0 right-0 h-40 w-40 bg-white rounded-full blur-[80px] sm:h-64 sm:w-64"></div>
        </div>
        <h2 className="font-h1 text-h1 text-white break-words [text-wrap:pretty]">{content.finalCta.headline}</h2>
        <p className="text-white/80 font-body-lg text-body-lg max-w-xl mx-auto">
          {content.finalCta.subheadline}
        </p>
        <div className="pt-6 space-y-4">
          <TrackedWhatsAppLink
            href={diagnosticWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            ctaId="final_whatsapp"
            ctaLocation="final_cta"
            className="inline-flex w-full max-w-full items-center justify-center bg-white text-primary px-5 py-4 rounded-2xl font-bold text-base leading-tight hover:shadow-xl transition-all active:scale-95 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
          >
            {content.finalCta.cta}
          </TrackedWhatsAppLink>
          <p className="text-white/70 text-sm">{content.finalCta.note}</p>
        </div>
      </div>
    </section>
  )
}
