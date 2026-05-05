'use client'

import { useLocale } from '@/context/LocaleContext'

export function CtaSection() {
  const { content } = useLocale()

  // We can use static text for now based on the design, or try to map it to content.hero.cta
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-primary-container rounded-[40px] p-12 md:p-20 text-center space-y-8 relative overflow-hidden accent-gradient">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
        </div>
        <h2 className="font-h1 text-h1 text-white">Pronto para escalar seu atendimento?</h2>
        <p className="text-white/80 font-body-lg text-body-lg max-w-xl mx-auto">
          Agende uma demonstração gratuita e descubra como podemos automatizar sua jornada de vendas.
        </p>
        <div className="pt-6">
          <a
            href="https://wa.me/5531988969661?text=Ol%C3%A1%2C+vim+pelo+site+e+tenho+interesse+em+seus+servi%C3%A7os."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all active:scale-95"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  )
}
