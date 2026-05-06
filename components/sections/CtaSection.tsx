'use client'

import { useLocale } from '@/context/LocaleContext'

export function CtaSection() {
  const { content } = useLocale()
  const diagnosticWhatsAppHref = `https://wa.me/${content.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(content.contact.whatsappMessage)}`

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-primary-container rounded-[40px] p-12 md:p-20 text-center space-y-8 relative overflow-hidden accent-gradient">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
        </div>
        <h2 className="font-h1 text-h1 text-white">{content.finalCta.headline}</h2>
        <p className="text-white/80 font-body-lg text-body-lg max-w-xl mx-auto">
          {content.finalCta.subheadline}
        </p>
        <div className="pt-6 space-y-4">
          <a
            href={diagnosticWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all active:scale-95"
          >
            {content.finalCta.cta}
          </a>
          <p className="text-white/70 text-sm">{content.finalCta.note}</p>
        </div>
      </div>
    </section>
  )
}
