import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { founders } from '../data/site'

export default function Founders() {
  return (
    <section id="founders" className="section-py relative scroll-mt-24">
      <div className="container-px">
        <SectionHeading eyebrow={founders.eyebrow} title={founders.title} align="center" />

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {founders.items.map((f, i) => (
            <Reveal key={f.name} delay={0.1 * i} y={36}>
              <article className="group grain relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-card transition-all duration-500 hover:border-violet-400/40 hover:shadow-glow">
                <div className="grid h-full gap-0 sm:grid-cols-[minmax(0,11rem)_1fr] sm:items-stretch">
                  <div className="relative h-56 min-h-0 overflow-hidden sm:h-full">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night-950/70 to-transparent sm:bg-gradient-to-r" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold text-white">{f.name}</h3>
                    <p className="mt-1 text-sm font-medium text-violet-300">{f.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-mist/75">{f.bio}</p>
                    <div className="mt-5 border-t border-white/10 pt-4">
                      <p className="text-xs uppercase tracking-wider text-mist/50">Специализация</p>
                      <p className="mt-1 text-sm text-mist/90">{f.focus}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
