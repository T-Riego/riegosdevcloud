'use client'

import { Children, type ReactNode } from 'react'
import { motion, type Variants } from 'motion/react'

export type AnimationType = 'fadeUp' | 'fadeIn' | 'staggerChildren'

export interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  staggerDelay?: number
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export { staggerItemVariants }

export function AnimateOnScroll({
  children,
  className,
  animation = 'fadeUp',
  delay = 0,
  staggerDelay = 0.09,
}: AnimateOnScrollProps) {
  if (animation === 'staggerChildren') {
    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    }

    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={containerVariants}
      >
        {Children.map(children, (child) => (
          <motion.div variants={staggerItemVariants}>{child}</motion.div>
        ))}
      </motion.div>
    )
  }

  const variants = animation === 'fadeIn' ? fadeInVariants : fadeUpVariants
  const customVariants: Variants =
    delay > 0
      ? {
          hidden: variants.hidden,
          visible: {
            ...(variants.visible as object),
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
          },
        }
      : variants

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={customVariants}
    >
      {children}
    </motion.div>
  )
}
