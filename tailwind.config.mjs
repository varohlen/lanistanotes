import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'parchment': '#E8D5B5',
        'dark-brown': '#2A2522',
      },
      backgroundColor: {
        'panel': 'rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [
    typography(),
  ],
}
