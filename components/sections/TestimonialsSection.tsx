'use client'

import { useLocale } from '@/context/LocaleContext'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

export function TestimonialsSection() {
  const { content } = useLocale()

  // Duplicate the list for seamless loop.
  // The keyframes in globals.css translate from -50% to 0, so the second copy
  // (offset by -50%) is what becomes visible at the start; at animation end,
  // track is at 0 and looks identical to start — loop is seamless.
  const items = content.testimonials.items
  const doubled = [...items, ...items]

  const renderCard = (item: typeof items[number], index: number) => {
    const initials = item.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)

    return (
      <div
        key={`${item.id}-${index}`}
        // shrink-0 prevents flex compression; w sizes the card explicitly
        className="shrink-0 w-[320px] sm:w-[360px] md:w-[400px] rounded-xl border border-surface bg-surface p-7 flex flex-col gap-5 transition-all duration-300 ease-out hover:border-accent/20 hover:-translate-y-1"
        // aria-hidden on the duplicate half so screen readers don't read testimonials twice
        aria-hidden={index >= items.length ? 'true' : undefined}
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
  }

  return (
    <section id="depoimentos" className="py-24 overflow-hidden">
      {/* Header stays inside the max-w container and keeps padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll animation="fadeUp">
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-3">
            {content.testimonials.sectionTitle}
          </p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-14 leading-tight">
            {content.testimonials.headline}
          </h2>
        </AnimateOnScroll>
      </div>

      {/* Marquee viewport: full section width, overflow contained */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
        role="region"
        aria-label={content.testimonials.sectionTitle}
      >
        <div className="flex gap-6 w-max animate-marquee">
          {doubled.map((item, index) => renderCard(item, index))}
        </div>
      </div>
    </section>
  )
}
