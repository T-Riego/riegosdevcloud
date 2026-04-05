'use client'

import { useLocale } from '@/context/LocaleContext'

export function TestimonialsSection() {
  const { content } = useLocale()

  return (
    <section id="depoimentos" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-sm text-accent uppercase tracking-widest mb-3">
          {content.testimonials.sectionTitle}
        </p>
        <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-14 leading-tight">
          {content.testimonials.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.testimonials.items.map((item) => {
            const initials = item.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)

            return (
              <div
                key={item.id}
                className="rounded-xl border border-surface bg-surface p-7 flex flex-col gap-5 transition-all duration-300 ease-out hover:border-accent/20 hover:-translate-y-1"
              >
                {/* Stars */}
                <div className="flex gap-0.5" role="img" aria-label={`${item.stars} out of 5 stars`}>
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <span key={i} className="text-accent text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-secondary italic leading-[1.75] flex-1 text-[0.95rem]">
                  &ldquo;{item.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-surface mt-auto">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent text-xs font-bold">{initials}</span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-primary">
                      {item.name}
                    </p>
                    <p className="font-body text-xs text-secondary/70">{item.company}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
