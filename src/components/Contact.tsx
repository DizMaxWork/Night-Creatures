import Reveal from './ui/Reveal'
import { contact } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="section-py relative scroll-mt-24">
      <div className="container-px">
        <Reveal y={36}>
          <div className="grain relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-night-800/80 to-night-900/80 px-7 py-14 shadow-card sm:px-14 sm:py-20">
            {/* Подсветка */}
            <div className="absolute -left-20 -top-20 h-72 w-72 animate-aurora rounded-full bg-violet-600/30 blur-[120px]" />
            <div className="absolute -bottom-24 -right-10 h-72 w-72 animate-aurora rounded-full bg-plasma-600/25 blur-[120px] [animation-delay:-8s]" />

            <div className="relative mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">
                <span className="h-px w-7 bg-violet-400/70" />
                {contact.eyebrow}
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
                {contact.title}
              </h2>
              <p className="mt-4 text-lg text-mist/80">{contact.subtitle}</p>

              <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
                <a
                  href={contact.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.07]"
                >
                  <span className="text-xs uppercase tracking-widest2 text-mist/55">
                    {contact.telegramLabel}
                  </span>
                  <span className="mt-2 font-display text-xl font-bold text-white transition-colors group-hover:text-violet-300">
                    {contact.telegram}
                  </span>
                </a>
                <a
                  href={contact.emailHref}
                  className="group flex flex-1 flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.07]"
                >
                  <span className="text-xs uppercase tracking-widest2 text-mist/55">
                    {contact.emailLabel}
                  </span>
                  <span className="mt-2 break-all font-display text-xl font-bold text-white transition-colors group-hover:text-violet-300">
                    {contact.email}
                  </span>
                </a>
              </div>

              <p className="mt-10 text-sm text-mist/60">{contact.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
