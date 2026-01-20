import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Shared & Common
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        // Blueprint Theme
        blueprint: {
          bg: '#0B1121',
          grid: 'rgba(255, 255, 255, 0.08)',
          primary: '#135bec',
        },
      },
      fontFamily: {
        sans: ['var(--font-be-vietnam-pro)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
        handwriting: ['var(--font-caveat)', 'cursive'],
        body: ['var(--font-work-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture':
          "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        'blueprint-grid':
          'linear-gradient(rgba(19, 91, 236, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(19, 91, 236, 0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
export default config;
