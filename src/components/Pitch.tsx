import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { pitch } from '../data/site'

export default function Pitch() {
  return (
    <section className="section-py relative">
      <div className="container-px">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Проблема */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-7 bg-violet-400/70" />
                {pitch.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
                {pitch.problem}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 text-lg leading-relaxed text-mist/80">{pitch.solution}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-violet-300">
                {pitch.note}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={pitch.ctas[0].href}>{pitch.ctas[0].label}</Button>
                <Button href={pitch.ctas[1].href} variant="ghost">
                  {pitch.ctas[1].label}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Карточка «модульной команды» */}
          <Reveal delay={0.1} className="lg:pt-10">
            <div className="grain relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-card backdrop-blur-md sm:p-10">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-plasma-500/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-6xl font-bold text-gradient">15+</span>
                  <span className="text-sm uppercase tracking-wider text-mist/70">
                    экспертов под вашу задачу
                  </span>
                </div>
                <p className="mt-6 text-sm text-mist/70">
                  Под каждый проект собираем точную команду — никого лишнего:
                </p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {pitch.experts.map((e) => (
                    <li
                      key={e}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-mist/90 transition-colors hover:border-violet-400/50 hover:text-white"
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
