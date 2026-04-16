'use client'

import { useLocale } from '@/context/LocaleContext'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

export function AboutSection() {
  const { content } = useLocale()

  return (
    <section id="sobre" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fadeUp">
          <p className="font-body text-sm text-accent uppercase tracking-widest mb-3">
            {content.about.sectionTitle}
          </p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-primary mb-14 leading-tight">
            {content.about.headline}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll
          animation="staggerChildren"
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {content.about.team.map((member) => (
            <div
              key={member.id}
              className="rounded-xl border border-surface bg-surface p-8 flex flex-col items-center text-center gap-5 transition-all duration-300 ease-out hover:border-accent/20 hover:-translate-y-1"
            >
              <div className="w-24 h-24 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <span className="text-accent text-xl font-heading font-bold select-none">
                  {member.initials}
                </span>
              </div>

              <div>
                <p className="font-heading font-bold text-lg text-primary leading-tight">
                  {member.name}
                </p>
                <p className="font-body text-sm text-accent mt-1">
                  {member.role}
                </p>
              </div>

              <p className="font-body text-secondary text-sm leading-[1.75]">
                {member.description}
              </p>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  )
}
