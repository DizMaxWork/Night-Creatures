import type { IconName } from '../../data/site'

interface IconProps {
  name: IconName
  className?: string
}

/**
 * Набор тонких линейных иконок для секции «Что мы делаем».
 */
export default function Icon({ name, className = 'h-6 w-6' }: IconProps) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'pen':
      return (
        <svg {...common}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      )
    case 'megaphone':
      return (
        <svg {...common}>
          <path d="m3 11 18-5v12L3 14v-3Z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      )
    case 'spark':
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="M12 8.5 13.7 11l2.8.4-2 2 .5 2.8L12 14.9 9 16.2l.5-2.8-2-2 2.8-.4Z" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 15l3-4 3 2 4-6" />
        </svg>
      )
    default:
      return null
  }
}
