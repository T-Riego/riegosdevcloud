'use client'

import { useLocale } from '@/context/LocaleContext'

export function HeroSection() {
  const { content } = useLocale()

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container rounded-full text-on-secondary-container">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="text-label-sm">Especialistas em Automação IA</span>
          </div>
          <h1 className="font-h1 text-h1 text-on-background max-w-xl">
            {content.hero.headline.split('máquina de captação')[0]}
            <span className="text-primary">máquina de captação</span>
            {content.hero.headline.split('máquina de captação')[1]}
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-lg">
            {content.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://wa.me/5531988969661?text=Ol%C3%A1%2C+vim+pelo+site+e+tenho+interesse+em+seus+servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 accent-gradient text-white rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              Começar Agora
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a 
              href="#portfolio"
              className="px-8 py-4 bg-white border border-outline-variant text-on-background rounded-xl font-semibold hover:bg-surface-container-low transition-colors active:scale-95 flex items-center justify-center text-center"
            >
              Ver Case Studies
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -z-10 inset-0 bg-primary-fixed blur-3xl opacity-20 rounded-full"></div>
          <div className="relative rounded-[32px] overflow-hidden border border-white soft-card-shadow">
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
