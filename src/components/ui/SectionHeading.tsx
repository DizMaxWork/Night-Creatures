import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

/**
 * Единый блок заголовка секции: надзаголовок + заголовок + подзаголовок.
 * Переносы строк в title (\n) превращаются в <br>.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const lines = title.split('\n')
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-7 bg-violet-400/70" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] text-white sm:text-4xl lg:text-[2.9rem]">
          {lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={
              'mt-5 text-base leading-relaxed text-mist/80 sm:text-lg' +
              (align === 'center' ? ' mx-auto' : '')
            }
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
