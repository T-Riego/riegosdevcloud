'use client'

import { useLocale } from '@/context/LocaleContext'

export function PortfolioSection() {
  const { content } = useLocale()

  return (
    <div className="flex flex-col">
      <section id="processo" className="py-20 bg-surface-container-low">
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
            <div className="bg-slate-50/50 p-8 rounded-3xl space-y-8 border border-slate-200/50">
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

      <section id="portfolio" className="py-20">
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
              <div className="aspect-video rounded-[32px] overflow-hidden mb-6 relative bg-surface-container-lowest">
                <img alt="WhatsApp Bot Case" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/Imagens/conectaseguro.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="w-full">
                  <h4 className="font-h3 text-h3 mb-2">Agente de Atendimento WhatsApp</h4>
                  <p className="text-secondary text-sm mb-4">
                    Atendimento inteligente alimentado com os dados da sua empresa.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Recebe Cliente</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Responde Dúvidas</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Consulta Placa</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Gera Proposta</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Agenda Vistoria</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Follow-up Automático</span>
                  </div>
                </div>
                <span className="bg-primary-container/20 text-on-primary-container px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap h-fit shrink-0 hidden sm:block">IA / BOT</span>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-[32px] overflow-hidden mb-6 relative bg-surface-container-lowest">
                <img alt="ConectaSaúde Bot Case" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/Imagens/conectasaude.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="w-full">
                  <h4 className="font-h3 text-h3 mb-2">ConectaSaúde</h4>
                  <p className="text-secondary text-sm mb-4">
                    Solucione o gargalo na recepção e deixe suas atendentes focadas no que realmente importa: seus pacientes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Atendimento Humanizado</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Agendamento de Pacientes</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Informações Úteis</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Marcação Automática</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Lembrete de Consultas</span>
                  </div>
                </div>
                <span className="bg-secondary-container/30 text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap h-fit mt-1 shrink-0 hidden sm:block">IA / CLÍNICAS</span>
              </div>
            </div>
            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-video rounded-[32px] overflow-hidden mb-6 relative bg-surface-container-lowest">
                <img alt="Desenvolvimento de Sites & Landing Pages" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/Imagens/AtualEpi.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div className="w-full">
                  <h4 className="font-h3 text-h3 mb-2">Sites &amp; Landing Pages</h4>
                  <p className="text-secondary text-sm mb-4">
                    Desenvolvimento de interfaces de alta conversão com foco em UX/UI premium e performance extrema. Personalize o site da sua empresa com design profissional e otimização de busca. Sua marca aparece, o cliente também.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Alta Conversão</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">UX/UI Premium</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Performance Extrema</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Design Profissional</span>
                    <span className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50">Otimização SEO</span>
                  </div>
                </div>
                <span className="bg-tertiary-container/30 text-on-tertiary-container px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap h-fit mt-1 shrink-0 hidden sm:block">WEB DESIGN</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
