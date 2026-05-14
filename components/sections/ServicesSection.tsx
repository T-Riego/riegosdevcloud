'use client'

import { useLocale } from '@/context/LocaleContext'

const mediaById = {
  whatsapp: { type: 'image', src: '/Imagens/Whatsapp3.png', alt: 'Atendimento com IA no WhatsApp' },
  videos: { type: 'video', src: '/Imagens/Divulgacao%20lu%2002.mp4', alt: 'Vídeos que explicam e vendem' },
  sites: { type: 'image', src: '/Imagens/AtualEpi.png', alt: 'Site e página de vendas' },
} as const

export function ServicesSection() {
  const { content } = useLocale()

  return (
    <section id="servicos" data-section-id="servicos" className="box-border w-full max-w-full overflow-x-clip py-20 bg-surface-container-lowest">
      <div className="box-border max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            {content.services.sectionTitle}
          </span>
          <h2 className="font-h2 text-h2 text-on-background break-words [text-wrap:pretty]">
            {content.services.headline}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.services.items.map((item) => {
            const media = mediaById[item.id as keyof typeof mediaById]

            if (!media) {
              throw new Error(`Unsupported service media id: ${item.id}`)
            }

            return (
              <article key={item.id} className="bg-white rounded-3xl border border-outline-variant/30 soft-card-shadow overflow-hidden flex flex-col">
                <div className="p-8 space-y-4">
                  <h3 className="font-h3 text-[22px] leading-tight text-on-background">{item.title}</h3>
                  <p className="text-secondary text-sm leading-6">{item.description}</p>
                </div>
                <div className="mt-auto bg-surface-container-lowest">
                  {media.type === 'video' ? (
                    <video
                      aria-label={media.alt}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover object-[50%_30%]"
                      src={media.src}
                    />
                  ) : (
                    <img alt={media.alt} className="w-full aspect-video object-cover" src={media.src} />
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
