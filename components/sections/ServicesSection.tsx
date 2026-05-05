'use client'

import { useLocale } from '@/context/LocaleContext'

export function ServicesSection() {
  const { content } = useLocale()

  return (
    <section id="servicos" className="py-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-h2 text-h2 text-on-background">O que Fazemos pela sua empresa!</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Soluções tecnológicas desenhadas para escalar seu negócio sem aumentar a complexidade operacional.
          </p>
        </div>

        {/* Bento Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3">
          
          {/* Service Card 1 */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-outline-variant/30 soft-card-shadow flex flex-col justify-between group hover:border-primary-container transition-colors duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary-container/20 rounded-2xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[32px]">smart_toy</span>
              </div>
              <h3 className="font-h3 text-h3">Automação Inteligente</h3>
              <p className="text-secondary max-w-md">
                Elimine tarefas repetitivas e erros humanos através da orquestração de processos ponta a ponta com as melhores tecnologias do mercado.
              </p>
            </div>
            <div className="mt-8">
              <img 
                alt="Process Automation" 
                className="w-full h-48 object-cover rounded-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVsSkdTvnjrYhz5aSmdoUa96xcAmzEj_OdpD5aR3nLe5IyoKmscRcqxuE-Ebps8hW4WmzHdb3_YhklLOYl0mggYLyJfgi1cbuwt-3UTt-D7z3xXyMgbyxa_xXZR2Rfx7FNxjRFsy9x8yvG9uSHlDhzRgEJrV1359Ec4BtNtUt8_XCbJerthk7IdeAOqEwidwQhnGmZz71DyC_X6G8Hdfzcqh6mRo8IPTkgUMftpSTWVA10icq0VyQ5qlvSY3dUzcL8rzFmH9coaAI"
              />
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-secondary-container/30 p-8 rounded-3xl border border-outline-variant/30 soft-card-shadow flex flex-col items-center text-center space-y-6">
            <div className="h-full w-full overflow-hidden rounded-3xl">
              <img 
                alt="Atendimento 24/7 com IA" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiKKMPVk7b7PfPPXbKxkSVu5qtjUUHoOuw6CbWyhG09gG-NteDfcVkdnoGIiYBm9t39uRpxgHlvso_hXKuY9GshS7NyRwy4_3uOxYuA3plu_p_ennR6bVu4sGc8G9tkfvmzr-9XiEw3-pJfkcrKUKH-m8pTT_I5VMf5nicPxjdXgjxQ1_N7vw-DNM7Pr_rVqijUkSuGv7nbtZS1WZ6C1Yvm8aFXhocOmcW4NxTPoUVXz3TFlHDP-ExRu1UXq6tzOpABOSiUHTZh"
              />
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-outline-variant/30 soft-card-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-secondary-fixed rounded-2xl flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[32px]">filter_alt</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-background">Captação de Clientes</h3>
              <p className="text-secondary">
                Estratégias de lead magnets e funis de nutrição automatizados que transformam visitantes curiosos em clientes pagantes.
              </p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="md:col-span-2 bg-slate-900 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px]"></div>
            <div className="space-y-4 z-10">
              <h3 className="font-h3 text-h3">Sites &amp; Landing Pages</h3>
              <p className="text-slate-400 max-w-sm">
                Páginas de alta performance focadas em conversão, com design moderno e otimização total para dispositivos móveis.
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
