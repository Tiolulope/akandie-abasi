import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        cream: '#faf6f0',
        'warm-white': '#fff9f2',
        charcoal: '#1c1a17',
        brown: '#5c3d2e',
        gold: '#c9933a',
        'gold-light': '#e8b86d',
        terracotta: '#b85c38',
        muted: '#8a7968',
        border: '#e5ddd3',
        surface: '#f5ede3',
      },
    },
  },
  plugins: [],
}
export default config
