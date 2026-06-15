/**
 * Декоративный «ночной» фон: мягкие сияющие пятна (aurora) + редкие звёзды.
 * Чисто визуальный слой, не мешает интеракциям (pointer-events: none).
 */
const stars = Array.from({ length: 36 }, (_, i) => ({
  top: `${(i * 53) % 100}%`,
  left: `${(i * 37 + 11) % 100}%`,
  size: i % 5 === 0 ? 2.4 : 1.4,
  delay: `${(i % 7) * 0.6}s`,
}))

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night-950">
      {/* Базовое затемнение к низу */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-900 via-night-950 to-black" />

      {/* Сияющие пятна */}
      <div className="absolute -top-40 left-[8%] h-[42rem] w-[42rem] animate-aurora rounded-full bg-violet-600/25 blur-[140px]" />
      <div className="absolute top-[30%] -right-32 h-[38rem] w-[38rem] animate-aurora rounded-full bg-plasma-600/20 blur-[150px] [animation-delay:-6s]" />
      <div className="absolute bottom-[-10%] left-[30%] h-[34rem] w-[34rem] animate-aurora rounded-full bg-violet-500/15 blur-[150px] [animation-delay:-12s]" />

      {/* Звёзды */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}

      {/* Лёгкая виньетка по краям */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55))]" />
    </div>
  )
}
