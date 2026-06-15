import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
  external?: boolean
}

/**
 * Кнопка-ссылка с двумя вариантами оформления.
 * primary — заметная фирменная заливка с подсветкой;
 * ghost — лёгкая обводка для второстепенных действий.
 */
export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  external,
}: ButtonProps) {
  const isExternal =
    external ?? (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel'))

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-night-950'

  const styles =
    variant === 'primary'
      ? 'bg-brand-gradient text-night-950 shadow-glow hover:shadow-glow-pink hover:-translate-y-0.5'
      : 'border border-white/15 text-white hover:border-violet-400/60 hover:bg-white/[0.04] hover:-translate-y-0.5'

  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  )
}
