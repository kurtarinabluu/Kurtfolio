import type { Config } from 'tailwindcss'
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: '#101F17',
          900: '#172B20',
          800: '#243B2D',
          700: '#314932',
        },
        mauve: {
          800: '#314932',
          700: '#385736',
          500: '#6F7F6E',
          200: '#B0C4A8',
          100: '#DCE5D6',
        },
        peony: {
          500: '#7E8F7E',
          400: '#6B9452',
          300: '#B0C4A8',
          200: '#C4D3BA',
          100: '#DCECDD',
          50: '#F4F8F4',
        },
        alabaster: {
          100: '#F4F8F4',
          200: '#DCECDD',
          300: '#C4D3BA',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
