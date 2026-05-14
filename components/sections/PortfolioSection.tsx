'use client'

import { useLocale } from '@/context/LocaleContext'

const projectImages = ['/Imagens/conectaseguro.png', '/Imagens/conectasaude.png', '/Imagens/AtualEpi.png']

export function PortfolioSection() {
  const { content } = useLocale()

  return (
    <div className="flex flex-col">
      <section id="processo" data-section-id="processo" className="box-border w-full max-w-full overflow-x-clip py-20 bg-surface-container-low">
        <div className="box-border max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-on-background">{content.process.headline}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.process.steps.map((step) => (
              <article key={step.id} className="p-6 bg-white rounded-2xl border border-outline-variant/30 soft-card-shadow">
                <span className="text-h3 font-bold text-primary/30 block mb-4">{step.number}</span>
                <h3 className="font-h3 text-[20px] mb-2">{step.title}</h3>
                <p className="text-secondary text-sm leading-6">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" data-section-id="portfolio" className="box-border w-full max-w-full overflow-x-clip py-20">
        <div className="box-border max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">{content.portfolio.sectionTitle}</span>
            <h2 className="font-h2 text-h2">{content.portfolio.headline}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
            {content.portfolio.items.map((project, index) => (
              <article key={project.id} className="group">
                <div className="aspect-video rounded-[32px] overflow-hidden mb-6 relative bg-surface-container-lowest">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={projectImages[index]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="w-full">
                  <h3 className="font-h3 text-h3 mb-2">{project.title}</h3>
                  <p className="text-secondary text-sm mb-4 leading-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-surface-container-high text-secondary text-[11px] font-medium rounded-md border border-outline-variant/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
