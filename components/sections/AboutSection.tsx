'use client'

import { useLocale } from '@/context/LocaleContext'

export function AboutSection() {
  const { content } = useLocale()

  return (
    <section id="sobre" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-sm text-accent uppercase tracking-widest mb-3">
          {content.about.sectionTitle}
        </p>
        <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-14 leading-tight">
          {content.about.headline}
        </h2>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl bg-surface border border-accent/20 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,255,0.05)]">
            <span className="text-accent/30 font-heading text-5xl font-bold select-none">T</span>
          </div>

          <div className="flex-1 max-w-2xl">
            <p className="font-body text-secondary text-base md:text-lg leading-[1.75] mb-8">
              {content.about.bio}
            </p>

            {/* Tool badges */}
            <p className="font-body text-sm text-secondary/70 uppercase tracking-wider mb-3">
              {content.about.toolsLabel}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {content.about.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-body font-medium bg-accent/5 transition-colors duration-200 hover:border-accent/60 hover:bg-accent/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
