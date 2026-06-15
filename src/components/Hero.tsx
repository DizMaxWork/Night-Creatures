import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { hero } from '../data/site'
import HeroBackground from './HeroBackground'
import Button from './ui/Button'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '22%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.65])

  const titleLines = hero.title.split('\n')

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      <HeroBackground parallaxY={imageY} reduceMotion={reduce ?? false} />
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-r from-night-950/90 via-night-950/50 to-transparent"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night-950 via-transparent to-night-950/40" />

      <div className="container-px relative w-full pt-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          <span className="eyebrow">
            <span className="h-px w-7 bg-violet-400/70" />
            {hero.eyebrow}
          </span>
        </motion.div>

        <h1 className="mt-6 font-display text-[15vw] font-bold leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
          {titleLines.map((line, i) => (
            <motion.span
              key={i}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {i === 1 ? <span className="text-gradient">{line}</span> : line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 max-w-xl border-l-2 border-violet-400/50 pl-5 text-lg italic leading-relaxed text-mist/90 sm:text-xl"
        >
          {hero.quote}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="ghost">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>
      </div>

      {/* Индикатор скролла */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest2 text-mist/50 lg:flex"
      >
        <span>Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-2 w-1 animate-float rounded-full bg-violet-400" />
        </span>
      </motion.div>
    </section>
  )
}
