/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        'racing-green': '#0F1612',
        'deep-forest': '#0C2218',
        'gable-green': '#14392A',
        'pine-700': '#1E5C3E',
        'spring-green': '#3DB87C',
        'spring-green-60': '#7EDCB0',
        'ice-cold': '#B8F5D8',
        'amber-signal': '#C8A84B',
        'cyan-signal': '#13ECEC',
        'slate-400': '#94A3B8',
        'slate-500': '#64748B',
        'slate-300': '#CBD5E1',
        'slate-700': '#334155',
        narvik: '#F1F5F9',
      },
      boxShadow: {
        glow: '0 0 120px rgba(61, 184, 124, 0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
