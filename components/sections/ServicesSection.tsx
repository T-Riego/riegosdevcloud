'use client'

import { useLocale } from '@/context/LocaleContext'

export function ServicesSection() {
  const { content } = useLocale()

  return (
    <section id="servicos" className="py-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-h2 text-h2 text-on-background">{content.services.headline}</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Soluções tecnológicas desenhadas para escalar seu negócio sem aumentar a complexidade operacional, gerando resultados e lucros reais.
          </p>
        </div>

        {/* Bento Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3">
          
          {/* Service Card 1 (Atendimento 24/7) - md:col-span-2 */}
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden border border-outline-variant/30 soft-card-shadow bg-white block">
            <img 
              alt="Atendimento 24/7 com IA" 
              className="w-full h-auto object-contain object-left" 
              src="/Imagens/Whatsapp3.png"
            />
            
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
              <div className="w-10 h-10 bg-primary-container/20 rounded-xl flex items-center justify-center text-primary shadow-sm backdrop-blur-sm">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
            </div>
          </div>

          {/* Service Card 2 (Automação Inteligente) - 1 col */}
          <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 soft-card-shadow flex flex-col justify-between group hover:border-primary-container transition-colors duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary-container/20 rounded-2xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]" data-weight="fill">smart_toy</span>
              </div>
              <h3 className="font-h3 text-[22px] leading-tight">{content.services.items[0].title}</h3>
              <p className="text-secondary max-w-md text-sm">
                {content.services.items[0].description}
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl bg-surface-container-lowest">
              <img 
                alt="Automação Inteligente" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/Imagens/screen1.png"
              />
            </div>
          </div>

          {/* Service Card 3 (Videos & Roteiros) */}
          <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 soft-card-shadow flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-secondary-fixed rounded-2xl flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[32px]">movie</span>
              </div>
              <h3 className="font-h3 text-[22px] leading-tight text-on-background">{content.services.items[2].title}</h3>
              <p className="text-secondary text-sm">
                {content.services.items[2].description}
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl bg-surface-container-lowest">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/Imagens/Divulgacao%20lu%2002.mp4"
              />
            </div>
          </div>

          {/* Service Card 4 (Sites & Landing Pages) */}
          <div className="md:col-span-2 bg-slate-900 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px]"></div>
            <div className="space-y-4 z-10">
              <h3 className="font-h3 text-h3">{content.services.items[3].title}</h3>
              <p className="text-slate-400 max-w-sm">
                {content.services.items[3].description}
              </p>
              <a 
                href="https://wa.me/5531988969661?text=Ol%C3%A1%2C+tenho+interesse+em+um+site."
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold flex items-center gap-2 group cursor-pointer"
              >
                Solicitar Orçamento
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="w-full h-full z-10">
              <img 
                alt="Modern Landing Page" 
                className="rounded-xl shadow-2xl transform lg:rotate-3 lg:translate-x-10" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE5yw7xMhEjoX7Ud6K1HkEDz71N09Os53FLnIpirC_AXpf6d63r4ZG6DbDZ6GWcOP_TjD3TcMvKPzQmCCNPJdQGuPDQV6QHGhidqOYsk8P99x83d3mAVg_1R9mQgQkvCvZOCm1rc7xcxZB-ShCtXb2FP0quygcPSUg22jaXNadcrZShpwBJE33d3A5XGm8_W7HwnvLlXwRixa97JxpYMH8VLwQV7aKV4Rq3EkB3PVlRzadAoytL5xLO9ZdfaIiKSGelus1QGdvbPs"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
