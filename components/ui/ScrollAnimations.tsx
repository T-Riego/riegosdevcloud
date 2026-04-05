'use client'

import { Children, type ReactNode } from 'react'
import { motion } from 'motion/react'

interface ScrollAnimationsProps {
  children: ReactNode
}

export function ScrollAnimations({ children }: ScrollAnimationsProps) {
  return (
    <>
      {Children.map(children, (child) => (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {child}
        </motion.div>
      ))}
    </>
  )
}
