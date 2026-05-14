'use client'

import { useLocale } from '@/context/LocaleContext'

export function HeroSection() {
  const { content } = useLocale()
  const diagnosticWhatsAppHref = `https://wa.me/${content.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(content.contact.whatsappMessage)}`

  return (
    <section className="box-border w-full max-w-full overflow-x-hidden px-5 pt-28 pb-20 sm:px-6 md:pt-48 md:pb-32">
      <div className="box-border max-w-7xl w-full max-w-full mx-auto grid min-w-0 grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="min-w-0 w-full max-w-full space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container rounded-full text-on-secondary-container">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="text-label-sm">{content.hero.badge}</span>
          </div>
          <h1 className="font-h1 text-h1 text-on-background max-w-full md:max-w-2xl break-words [text-wrap:pretty] md:[text-wrap:balance]">
            {content.hero.headline}
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-full md:max-w-xl break-words">
            {content.hero.subheadline}
          </p>
          <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={diagnosticWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-w-0 max-w-full box-border px-5 sm:px-8 py-4 accent-gradient text-white rounded-xl font-bold flex items-center justify-center gap-2 text-center text-sm sm:text-base leading-tight whitespace-normal active:scale-95 transition-transform"
            >
              <span className="min-w-0">{content.hero.ctaPrimary}</span>
              <span className="material-symbols-outlined shrink-0">arrow_forward</span>
            </a>
            <a 
              href="#portfolio"
              className="w-full sm:w-auto min-w-0 max-w-full box-border px-5 sm:px-8 py-4 bg-white border border-outline-variant text-on-background rounded-xl font-semibold hover:bg-surface-container-low transition-colors active:scale-95 flex items-center justify-center text-center text-sm sm:text-base leading-tight whitespace-normal"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="relative min-w-0 w-full">
          <div className="absolute -z-10 inset-0 bg-primary-fixed blur-3xl opacity-20 rounded-full"></div>
          <div className="relative rounded-3xl overflow-hidden border border-white soft-card-shadow">
            <img 
              alt="RiegosDev Dashboard" 
              className="w-full h-auto object-cover aspect-video lg:aspect-square" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM73OP1Gcm0jUfqvaIbHSTWuC0Ur7jV5zxROQMWsc0oVMzOmbZvDHbfoZCq9GTN4LQK250QKGR-GibdzfuHJyK-EGQnN17aY6z4NU5q1zPVPBju98jAqYDN63N8ojPqeGliNONEypUm9cnTyWbXJ78g2WDHRzZQE7m9flZdUseQjpAONM_gXvqO_V6bFy-Y1HOKVCkGrvtvXseycVTMM4Vz3fKYkBaf_j4sM433nsqDr81q__bNAHhUPtiHsNEDiDdAfW4TjM5sQ4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
