'use client'

import { type ReactNode } from 'react'
import { motion } from 'motion/react'

interface ScrollAnimatorProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollAnimator({ children, className, delay = 0 }: ScrollAnimatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
