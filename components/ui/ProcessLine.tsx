'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export function ProcessLine() {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <svg
      ref={ref}
      className="absolute top-6 left-[12.5%] right-[12.5%] w-[75%] hidden md:block"
      height="2"
      viewBox="0 0 100 2"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M0,1 L100,1"
        stroke="rgba(0,255,255,0.35)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        style={{ pathLength: 0 }}
      />
    </svg>
  )
}
