'use client'

import { useState } from 'react'
import { useLocale } from '@/context/LocaleContext'
import { X, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

export function PortfolioSection() {
  const { content } = useLocale()
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeItem = content.portfolio.items.find((p) => p.id === activeId)

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fadeUp">
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-3">
            {content.portfolio.sectionTitle}
          </p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-14 leading-tight">
            {content.portfolio.headline}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll
          animation="staggerChildren"
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {content.portfolio.items.map((item) => {
            const isPlaceholder = item.tech.length === 0
            return (
              <button
                key={item.id}
                onClick={() => !isPlaceholder && setActiveId(item.id)}
                disabled={isPlaceholder}
                className={`text-left rounded-xl border bg-surface p-7 flex flex-col gap-4 transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isPlaceholder
                    ? 'border-surface/50 opacity-60 cursor-default'
                    : 'border-surface hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:-translate-y-1 cursor-pointer'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-body px-2.5 py-1 rounded-full ${
                    isPlaceholder
                      ? 'bg-secondary/10 text-secondary/60'
                      : 'bg-accent/10 text-accent'
                  }`}>
                    {item.status}
                  </span>
                  {!isPlaceholder && <ExternalLink className="w-4 h-4 text-secondary/40" />}
                </div>
                <h3 className="font-heading font-bold text-lg text-primary">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-secondary leading-relaxed flex-1">
                  {item.description}
                </p>
                {!isPlaceholder && (
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {item.tech.map((t) => (
                      <span key={t} className="text-[0.65rem] px-2 py-0.5 rounded bg-accent/5 text-accent/70 font-body">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            )
          })}
        </AnimateOnScroll>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface border border-accent/20 rounded-2xl p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-[0_0_60px_rgba(0,255,255,0.1)]"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-body px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                    {activeItem.status}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-primary mt-3">
                    {activeItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveId(null)}
                  className="w-8 h-8 rounded-full bg-background/50 flex items-center justify-center hover:bg-background transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
                  aria-label={content.portfolio.close}
                >
                  <X className="w-4 h-4 text-secondary" />
                </button>
              </div>

              <p className="font-body text-secondary leading-[1.75] mb-6">
                {activeItem.fullDescription}
              </p>

              {activeItem.tech.length > 0 && (
                <div>
                  <p className="font-body text-xs text-secondary/70 uppercase tracking-wider mb-2">
                    {content.portfolio.technologies}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeItem.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full border border-accent/30 text-accent text-xs font-body bg-accent/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
