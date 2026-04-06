'use client'

import dynamic from 'next/dynamic'
import { useLocale } from '@/context/LocaleContext'
import { TypeAnimation } from 'react-type-animation'
import { motion, type Variants } from 'motion/react'

const ParticleBackground = dynamic(
  () => import('@/components/ui/ParticleBackground').then((m) => m.ParticleBackground),
  { ssr: false }
)

const ctaContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.8,
    },
  },
}

const ctaItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export function HeroSection() {
  const { content, locale } = useLocale()
  const phone = content.contact.whatsappNumber.replace(/\D/g, '')
  const waMsg = encodeURIComponent(content.contact.whatsappMessage)

  // Build typewriter sequence: [text, pause, text, pause, ...]
  const typewriterSequence = content.hero.typewriterItems.flatMap((item) => [item, 2000])

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 text-center overflow-hidden">
      <ParticleBackground />

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(0,255,255,0.06)_0%,transparent_60%)] pointer-events-none z-[1]" />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-heading font-bold text-[clamp(2.25rem,6vw,4.5rem)] text-primary leading-[1.1] tracking-tight max-w-5xl">
          {content.hero.headline}
        </h1>

        {/* Typewriter effect */}
        <div className="mt-4 h-8 md:h-10 flex items-center" aria-hidden="true">
          <TypeAnimation
            key={locale}
            sequence={typewriterSequence}
            wrapper="span"
            speed={40}
            deletionSpeed={60}
            repeat={Infinity}
            className="font-body text-lg md:text-xl text-accent"
          />
        </div>
        {/* Screen-reader-only full text */}
        <span className="sr-only">
          {content.hero.typewriterItems.join(', ')}
        </span>

        <p className="font-body text-lg md:text-xl text-secondary mt-4 max-w-2xl leading-relaxed">
          {content.hero.subheadline}
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10"
          initial="hidden"
          animate="visible"
          variants={ctaContainerVariants}
        >
          <motion.a
            href="#portfolio"
            variants={ctaItemVariants}
            className="inline-flex items-center justify-center px-8 py-3.5 min-h-[44px] rounded-lg bg-accent text-background font-heading font-bold text-base hover:brightness-110 active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
          >
            {content.hero.ctaPrimary}
          </motion.a>
          <motion.a
            href={`https://wa.me/${phone}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            variants={ctaItemVariants}
            className="inline-flex items-center justify-center px-8 py-3.5 min-h-[44px] rounded-lg border border-accent text-accent font-heading font-bold text-base hover:bg-accent/10 active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
          >
            {content.hero.ctaWhatsApp}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
