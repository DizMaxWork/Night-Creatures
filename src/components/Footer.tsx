import { brand, nav } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-night-950">
                <span className="font-display text-sm font-bold">N</span>
              </span>
              <span className="font-display text-base font-semibold text-white">{brand.name}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-mist/60">{brand.scope}.</p>
          </div>

          <nav aria-label="Навигация в подвале">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-mist/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-mist/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {brand.name}. Все права защищены.</p>
          <div className="flex gap-5">
            <a
              href={brand.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Telegram
            </a>
            <a href={brand.emailHref} className="transition-colors hover:text-white">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
