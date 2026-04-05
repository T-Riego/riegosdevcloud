'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

const PARTICLE_CONFIG: ISourceOptions = {
  fullScreen: false,
  fpsLimit: 60,
  particles: {
    color: { value: '#00FFFF' },
    links: {
      color: '#00FFFF',
      distance: 150,
      enable: true,
      opacity: 0.15,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: 'none',
      outModes: { default: 'out' },
    },
    number: {
      value: 60,
      density: { enable: true },
    },
    opacity: {
      value: { min: 0.1, max: 0.4 },
    },
    shape: { type: 'circle' },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
}

const MOBILE_CONFIG: ISourceOptions = {
  ...PARTICLE_CONFIG,
  particles: {
    ...PARTICLE_CONFIG.particles,
    number: {
      value: 20,
      density: { enable: true },
    },
    move: {
      ...PARTICLE_CONFIG.particles!.move,
      speed: 0.5,
    },
  },
}

export function ParticleBackground() {
  const [ready, setReady] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  if (!ready) return null

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 z-0"
      options={isMobile ? MOBILE_CONFIG : PARTICLE_CONFIG}
    />
  )
}
