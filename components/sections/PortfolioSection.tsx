'use client'

import { useLocale } from '@/context/LocaleContext'

export function PortfolioSection() {
  const { content } = useLocale()

  return (
    <div id="portfolio">
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-on-background">Como sua operação começa a gerar resultados</h2>
          </div>
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="p-6 bg-white rounded-2xl border border-outline-variant/30 soft-card-shadow">
              <span className="text-h3 font-bold text-primary/30 block mb-4">01</span>
              <h3 className="font-h3 text-[20px] mb-2">Diagnóstico</h3>
              <p className="text-secondary text-sm">Mapeamos cada gargalo do seu atendimento atual.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-outline-variant/30 soft-card-shadow">
              <span className="text-h3 font-bold text-primary/30 block mb-4">02</span>
              <h3 className="font-h3 text-[20px] mb-2">Desenho</h3>
              <p className="text-secondary text-sm">Criamos o fluxo lógico e os prompts de IA.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-outline-variant/30 soft-card-shadow">
              <span className="text-h3 font-bold text-primary/30 block mb-4">03</span>
              <h3 className="font-h3 text-[20px] mb-2">Implementação</h3>
              <p className="text-secondary text-sm">Colocamos a máquina para rodar em ambiente controlado.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-outline-variant/30 soft-card-shadow">
              <span className="text-h3 font-bold text-primary/30 block mb-4">04</span>
              <h3 className="font-h3 text-[20px] mb-2">Escala</h3>
              <p className="text-secondary text-sm">Monitoramento e ajustes para explosão do volume.</p>
            </div>
          </div>
          {/* Comparison Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-[40px] border border-outline-variant/20 soft-card-shadow">
            <div className="space-y-8">
              <h3 className="font-bold text-sm tracking-widest text-secondary uppercase">A REALIDADE DA SUA OPERAÇÃO</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error mt-1">close</span>
                  <span className="text-secondary">Leads perdidos por demora no retorno</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error mt-1">close</span>
                  <span className="text-secondary">Equipe sobrecarregada com dúvidas básicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-error mt-1">close</span>
                  <span className="text-secondary">Custo fixo de atendimento sempre crescente</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary-container/20 p-8 rounded-3xl space-y-8 border border-primary/10">
              <h3 className="font-bold text-sm tracking-widest text-primary uppercase">COM RIEGOSDEV</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="text-on-surface font-medium">Resposta instantânea em 100% dos contatos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="text-on-surface font-medium">Filtro de leads automático: foque só no que vende</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="text-on-surface font-medium">Atendimento escalável sem contratar novos funcionários</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Portfólio</span>
              <h2 className="font-h2 text-h2">Projetos que entregaram resultado</h2>
            </div>
            <a className="text-secondary font-semibold flex items-center gap-2 hover:text-primary transition-colors" href="#">
              Ver todos os projetos
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-[32px] overflow-hidden mb-6 relative">
                <img alt="WhatsApp Bot Case" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/ADBb0uiKKMPVk7b7PfPPXbKxkSVu5qtjUUHoOuw6CbWyhG09gG-NteDfcVkdnoGIiYBm9t39uRpxgHlvso_hXKuY9GshS7NyRwy4_3uOxYuA3plu_p_ennR6bVu4sGc8G9tkfvmzr-9XiEw3-pJfkcrKUKH-m8pTT_I5VMf5nicPxjdXgjxQ1_N7vw-DNM7Pr_rVqijUkSuGv7nbtZS1WZ6C1Yvm8aFXhocOmcW4NxTPoUVXz3TFlHDP-ExRu1UXq6tzOpABOSiUHTZh" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-h3 text-h3 mb-2">Agente de Atendimento WhatsApp</h4>
                  <p className="text-secondary">Implementação de IA generativa para Associações veiculares, Pet Shops e Clínicas Médicas reduzindo tempo de resposta em 95%.</p>
                </div>
                <span className="bg-primary-container/20 text-on-primary-container px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap h-fit">IA / BOT</span>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-[32px] overflow-hidden mb-6 relative">
                <img alt="Lead Generation Automation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPCrOst-7z0dQkP4PDjhpwc7yJSYKbPk9LRPaeOWeGfGIVWIZzP6-5nFmnuMlrm4Lu0ZsIbt80AWaQgOp6Ey-8uTqttAop3WYmjhBpePxVGO8Uqb7uRmaFCR4nLsWYXvaon1afWDfN3j9JWHsUMpoxXJY6amK-59YZMJXGPSB20tEQ2I6LpWwGjG5N9t117Ca5stynR2n4s_olLUyNGpt8wkCfJlFkvkTQgD78zQDH_8s96viwzHjrubO5wFCNNzR0ykltdgPFL-U" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-h3 text-h3 mb-2">Automação de Captação de Leads</h4>
                  <p className="text-secondary">Funil automático integrado com CRM que aumentou a conversão em 40% em 3 meses.</p>
                </div>
                <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap h-fit">MARKETING</span>
              </div>
            </div>
            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-[32px] overflow-hidden mb-6 relative">
                <img alt="Desenvolvimento de Sites & Landing Pages" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE5yw7xMhEjoX7Ud6K1HkEDz71N09Os53FLnIpirC_AXpf6d63r4ZG6DbDZ6GWcOP_TjD3TcMvKPzQmCCNPJdQGuPDQV6QHGhidqOYsk8P99x83d3mAVg_1R9mQgQkvCvZOCm1rc7xcxZB-ShCtXb2FP0quygcPSUg22jaXNadcrZShpwBJE33d3A5XGm8_W7HwnvLlXwRixa97JxpYMH8VLwQV7aKV4Rq3EkB3PVlRzadAoytL5xLO9ZdfaIiKSGelus1QGdvbPs" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-h3 text-h3 mb-2">Sites &amp; Landing Pages</h4>
                  <p className="text-secondary text-sm">Desenvolvimento de interfaces de alta conversão com foco em UX/UI premium e performance extrema.</p>
                </div>
                <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap h-fit">WEB DESIGN</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
