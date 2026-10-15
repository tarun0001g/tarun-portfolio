/** @type {import('tailwindcss').Config} */
// Design tokens live as CSS variables in src/index.css (see :root).
// Change the accent colors there and the whole site follows.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        border: token('border'),
        fg: token('fg'),
        muted: token('muted'),
        'on-accent': token('on-accent'),
        coral: token('accent-secondary'),
        'accent-hover': token('accent-hover'),
        accent: {
          DEFAULT: token('accent'),
          1: token('accent'),
          2: token('accent-hover'),
          3: token('accent'),
          hover: token('accent-hover'),
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Fluid type scale
        hero: ['clamp(2.75rem, 1.5rem + 6vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
        h2: ['clamp(2rem, 1.25rem + 3vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        lead: ['clamp(1.0625rem, 0.95rem + 0.5vw, 1.375rem)', { lineHeight: '1.6' }],
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(0 0 0 / 0.16), 0 12px 38px -14px rgb(0 0 0 / 0.48)',
        card: '0 1px 0 0 rgb(255 255 255 / 0.035) inset, 0 24px 48px -24px rgb(0 0 0 / 0.8), 0 12px 32px -26px rgb(0 0 0 / 0.38)',
      },
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
        blob: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%,-6%,0) scale(1.08)' },
          '66%': { transform: 'translate3d(-5%,4%,0) scale(0.95)' },
        },
        blink: { '50%': { opacity: '0' } },
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgb(var(--accent) / 0.6)' },
          '100%': { boxShadow: '0 0 0 10px rgb(var(--accent) / 0)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        blob: 'blob 18s ease-in-out infinite',
        blink: 'blink 1s steps(1) infinite',
        pulseDot: 'pulseDot 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
}
