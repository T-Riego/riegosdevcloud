'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocale } from '@/context/LocaleContext'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

export function TestimonialsSection() {
  const { content } = useLocale()
  const items = content.testimonials.items
  const [index, setIndex] = useState(0)

  // Quantos cards mostrar por vez (responsivo via CSS grid; aqui controlamos só o índice base)
  const total = items.length

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  // Mostra 3 cards (desktop), 2 (tablet), 1 (mobile) começando em `index`, com wrap-around
  const visible = Array.from({ length: 3 }, (_, k) => items[(index + k) % total])

  const renderCard = (item: typeof items[number]) => {
    const initials = item.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)

    return (
      <div
        key={item.id}
        className="rounded-2xl border border-surface bg-surface p-8 flex flex-col gap-5 transition-all duration-300 ease-out hover:border-accent/20 hover:-translate-y-1"
      >
        <div className="flex gap-0.5" role="img" aria-label={`${item.stars} out of 5 stars`}>
          {Array.from({ length: item.stars }).map((_, i) => (
            <span key={i} className="text-accent text-sm">★</span>
          ))}
        </div>

        <blockquote className="font-body text-secondary italic leading-[1.75] flex-1 text-[0.95rem]">
          &ldquo;{item.text}&rdquo;
        </blockquote>

        <div className="flex items-center gap-3 pt-2 border-t border-surface mt-auto">
          <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <span className="text-accent text-xs font-bold">{initials}</span>
          </div>
          <div>
            <p className="font-heading font-semibold text-sm text-primary">{item.name}</p>
            <p className="font-body text-xs text-secondary/70">{item.company}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="depoimentos" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fadeUp">
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-3">
            {content.testimonials.sectionTitle}
          </p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-14 leading-tight">
            {content.testimonials.headline}
          </h2>
        </AnimateOnScroll>

        {/* Grid de 1 / 2 / 3 cards conforme breakpoint */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(renderCard)}
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="w-10 h-10 rounded-full border border-surface hover:border-accent/40 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-secondary" />
          </button>

          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-accent' : 'w-1.5 bg-secondary/30 hover:bg-secondary/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Próximo"
            className="w-10 h-10 rounded-full border border-surface hover:border-accent/40 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-secondary" />
          </button>
        </div>
      </div>
    </section>
  )
}
