import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { about } from '../data/site'
import { asset } from '../lib/assets'

export default function About() {
  return (
    <section id="about" className="section-py relative scroll-mt-24">
      <div className="container-px">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Фото */}
          <Reveal y={36} className="order-1 lg:order-none">
            <div className="grain relative overflow-hidden rounded-3xl border border-white/10 shadow-card">
              <img
                src={asset(about.image)}
                alt="Презентация исследования Night Creatures"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 to-transparent" />
            </div>
          </Reveal>

          {/* Текст */}
          <div>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
            <div className="mt-6 space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="text-base leading-relaxed text-mist/80 sm:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Цифры */}
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.08 * i} className="bg-night-900/60">
              <div className="px-7 py-9 text-center">
                <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-3 text-sm text-mist/70">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
