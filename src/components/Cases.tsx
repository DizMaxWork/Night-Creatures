import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { cases } from '../data/site'

export default function Cases() {
  return (
    <section id="cases" className="section-py relative scroll-mt-24">
      <div className="container-px">
        <SectionHeading eyebrow={cases.eyebrow} title={cases.title} subtitle={cases.subtitle} />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {cases.items.map((c, i) => (
            <Reveal key={c.title} delay={0.08 * i} y={36}>
              <article className="group grain flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-400/40 hover:shadow-glow">
                <div className="flex flex-1 flex-col p-7">
                  <span className="mb-4 inline-flex w-fit rounded-full bg-night-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
                    Кейс 0{i + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/75">{c.result}</p>

                  <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="bg-night-900/70 px-4 py-4">
                        <dt className="font-display text-lg font-bold text-gradient">{m.value}</dt>
                        <dd className="mt-1 text-xs leading-tight text-mist/65">{m.label}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
