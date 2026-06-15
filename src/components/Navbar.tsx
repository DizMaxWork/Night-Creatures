import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { brand, nav } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 ' +
        (scrolled
          ? 'border-b border-white/10 bg-night-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent')
      }
    >
      <nav className="container-px flex h-16 items-center justify-between lg:h-20">
        <a href="#top" className="group flex items-center gap-2.5" aria-label={brand.name}>
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-night-950 shadow-glow">
            <span className="font-display text-sm font-bold">N</span>
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-white">
            Night Creatures
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-sm text-mist/80 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand-gradient after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={brand.telegramHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-night-950 shadow-glow transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
        >
          Обсудить задачу
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="Меню"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={
                'block h-0.5 w-5 bg-white transition-transform ' +
                (open ? 'translate-y-2 rotate-45' : '')
              }
            />
            <span className={'block h-0.5 w-5 bg-white transition-opacity ' + (open ? 'opacity-0' : '')} />
            <span
              className={
                'block h-0.5 w-5 bg-white transition-transform ' +
                (open ? '-translate-y-2 -rotate-45' : '')
              }
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/10 bg-night-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-mist/85 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={brand.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-brand-gradient px-5 py-3 text-center text-sm font-semibold text-night-950"
                >
                  Обсудить задачу
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
