import { motion, type MotionValue } from 'framer-motion'

interface HeroBackgroundProps {
  parallaxY: MotionValue<string>
  reduceMotion: boolean
}

/** Декоративные точки созвездия — фиксированные координаты в viewBox 100×100 */
const constellation = [
  { cx: 12, cy: 18, r: 0.35 },
  { cx: 22, cy: 8, r: 0.5 },
  { cx: 38, cy: 14, r: 0.3 },
  { cx: 52, cy: 6, r: 0.45 },
  { cx: 68, cy: 12, r: 0.35 },
  { cx: 82, cy: 22, r: 0.55 },
  { cx: 90, cy: 10, r: 0.3 },
  { cx: 76, cy: 32, r: 0.4 },
  { cx: 58, cy: 28, r: 0.25 },
  { cx: 44, cy: 34, r: 0.5 },
  { cx: 28, cy: 38, r: 0.35 },
  { cx: 16, cy: 48, r: 0.4 },
  { cx: 34, cy: 52, r: 0.3 },
  { cx: 62, cy: 46, r: 0.45 },
  { cx: 88, cy: 44, r: 0.35 },
  { cx: 72, cy: 58, r: 0.5 },
  { cx: 48, cy: 62, r: 0.3 },
  { cx: 24, cy: 68, r: 0.4 },
  { cx: 8, cy: 78, r: 0.35 },
  { cx: 36, cy: 82, r: 0.45 },
  { cx: 56, cy: 76, r: 0.3 },
  { cx: 78, cy: 72, r: 0.5 },
  { cx: 92, cy: 86, r: 0.35 },
  { cx: 64, cy: 90, r: 0.4 },
]

const constellationLines: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [4, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [12, 13],
  [13, 14],
  [13, 15],
  [15, 16],
  [16, 17],
  [17, 18],
  [18, 19],
  [19, 20],
  [20, 21],
  [21, 22],
  [20, 23],
]

export default function HeroBackground({ parallaxY, reduceMotion }: HeroBackgroundProps) {
  return (
    <motion.div
      style={{ y: parallaxY }}
      className="absolute inset-0 -z-10 scale-110"
      aria-hidden
    >
      {/* Базовый ночной градиент */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_20%_0%,#1a1035_0%,#06060b_55%,#020205_100%)]" />

      {/* Светящиеся «туманности» */}
      <div
        className={`absolute -left-[15%] top-[-20%] h-[55rem] w-[55rem] rounded-full bg-violet-600/30 blur-[120px] ${reduceMotion ? '' : 'animate-aurora'}`}
      />
      <div
        className={`absolute -right-[10%] top-[15%] h-[48rem] w-[48rem] rounded-full bg-plasma-600/22 blur-[130px] ${reduceMotion ? '' : 'animate-aurora [animation-delay:-7s]'}`}
      />
      <div
        className={`absolute bottom-[-25%] left-[25%] h-[42rem] w-[42rem] rounded-full bg-violet-500/18 blur-[140px] ${reduceMotion ? '' : 'animate-aurora [animation-delay:-14s]'}`}
      />

      {/* Сетка — «радар ночи» */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(167,139,250,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167,139,250,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 65% 40%, black 20%, transparent 75%)',
        }}
      />

      {/* SVG: созвездие + абстрактный силуэт «существа» */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hero-moon-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f2e3c2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f2e3c2" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-creature-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#d946ef" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* Полумесяц */}
        <circle cx="78" cy="22" r="5.5" fill="url(#hero-moon-glow)" opacity="0.35" />
        <circle cx="78" cy="22" r="4.2" fill="#f2e3c2" opacity="0.55" />
        <circle cx="79.8" cy="21.2" r="3.6" fill="#0a0a12" />

        {/* Концентрические кольца — «эхо ночи» */}
        <circle cx="72" cy="55" r="28" fill="none" stroke="rgba(167,139,250,0.06)" strokeWidth="0.08" />
        <circle cx="72" cy="55" r="20" fill="none" stroke="rgba(217,70,239,0.05)" strokeWidth="0.06" />
        <circle cx="72" cy="55" r="12" fill="none" stroke="rgba(167,139,250,0.04)" strokeWidth="0.05" />

        {/* Абстрактный силуэт — намёк на «ночное существо» */}
        <path
          d="M 58 38 Q 72 28 88 42 Q 95 58 82 72 Q 68 88 52 78 Q 38 68 42 52 Q 46 38 58 38 Z"
          fill="url(#hero-creature-fill)"
          stroke="rgba(167,139,250,0.15)"
          strokeWidth="0.12"
        />
        <path
          d="M 62 48 Q 70 44 76 50 Q 74 58 66 56 Q 60 54 62 48"
          fill="rgba(217,70,239,0.18)"
        />

        {/* Созвездие */}
        <g opacity="0.55">
          {constellationLines.map(([a, b], i) => {
            const p1 = constellation[a]
            const p2 = constellation[b]
            return (
              <line
                key={i}
                x1={p1.cx}
                y1={p1.cy}
                x2={p2.cx}
                y2={p2.cy}
                stroke="rgba(196,181,253,0.35)"
                strokeWidth="0.06"
              />
            )
          })}
          {constellation.map((p, i) => (
            <circle
              key={i}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill={i % 4 === 0 ? '#e879f9' : '#c4b5fd'}
              opacity={i % 3 === 0 ? 0.9 : 0.55}
            />
          ))}
        </g>
      </svg>

      {/* Крупный декоративный текст — «водяной знак» */}
      <div className="absolute right-[-5%] top-1/2 hidden -translate-y-1/2 select-none lg:block">
        <p
          className="font-display text-[22vw] font-bold leading-none tracking-tighter text-white/[0.025]"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          NIGHT
        </p>
      </div>

      {/* Зернистость */}
      <div className="grain absolute inset-0" />

      {/* Лёгкие горизонтальные «scan lines» */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)',
        }}
      />
    </motion.div>
  )
}
