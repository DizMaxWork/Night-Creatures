import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { process } from '../data/site'

export default function Process() {
  return (
    <section id="process" className="section-py relative scroll-mt-24">
      <div className="container-px">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          subtitle={process.subtitle}
        />

        <div className="relative mt-8">
          {/* Вертикальная линия-таймлайн */}
          <div className="absolute left-[1.15rem] top-2 bottom-2 hidden w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent sm:block" />

          <ol className="space-y-10">
            {process.steps.map((step, i) => (
              <Reveal as="li" key={step.number} delay={0.06 * i} className="relative sm:pl-16">
                <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-violet-400/40 bg-night-900 text-sm font-bold text-violet-300 shadow-glow sm:flex">
                  {step.number}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-violet-400/30">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl font-bold text-gradient sm:hidden">
                      {step.number}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mist/75 sm:text-base">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
