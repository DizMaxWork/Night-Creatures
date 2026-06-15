import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { services } from '../data/site'

export default function Services() {
  return (
    <section id="services" className="section-py relative scroll-mt-24">
      <div className="container-px">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={0.07 * i} y={32}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.05]">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-600/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-night-950 shadow-glow">
                    <Icon name={s.icon} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/75">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
