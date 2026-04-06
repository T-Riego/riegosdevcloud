'use client'

import { useLocale } from '@/context/LocaleContext'
import { Bot, MessageCircle, Users, Globe, Code, Video } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

const SERVICE_ICONS: Record<string, LucideIcon> = {
  automation: Bot,
  whatsapp: MessageCircle,
  leads: Users,
  sites: Globe,
  apps: Code,
  videos: Video,
}

export function ServicesSection() {
  const { content } = useLocale()

  return (
    <section id="servicos" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fadeUp">
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-3">
            {content.services.sectionTitle}
          </p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-14 leading-tight">
            {content.services.headline}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll
          animation="staggerChildren"
          staggerDelay={0.09}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {content.services.items.map((item) => {
            const Icon = SERVICE_ICONS[item.id] ?? Bot
            return (
              <div
                key={item.id}
                className="group rounded-xl border border-surface bg-surface p-7 transition-all duration-300 ease-out hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:-translate-y-1 cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-accent/20">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </AnimateOnScroll>
      </div>
    </section>
  )
}
