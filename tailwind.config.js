/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Глубокая ночь — основа палитры
        night: {
          950: '#06060b',
          900: '#0a0a12',
          850: '#0f0f1c',
          800: '#15152a',
          700: '#1d1d38',
          600: '#272749',
        },
        // Неоновый «креатив» — фиолетово-пурпурный градиент
        violet: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        plasma: {
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
        },
        // Лунный тёплый акцент для редких подсветок
        moon: '#f2e3c2',
        mist: '#b9b6d6',
      },
      fontFamily: {
        display: ['"Unbounded"', '"Manrope"', 'system-ui', 'sans-serif'],
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(139, 92, 246, 0.55)',
        'glow-pink': '0 0 80px -20px rgba(217, 70, 239, 0.5)',
        card: '0 30px 80px -30px rgba(0, 0, 0, 0.75)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #a78bfa 0%, #d946ef 55%, #f0abfc 100%)',
        'night-fade': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(139,92,246,0.22), transparent 60%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(6%, -4%) scale(1.1)' },
          '66%': { transform: 'translate(-5%, 5%) scale(0.95)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.9' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 8s linear infinite',
        float: 'float 7s ease-in-out infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
