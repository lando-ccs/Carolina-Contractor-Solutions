import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#002868',
          dark: '#001a45',
          light: '#003580',
        },
        red: {
          DEFAULT: '#E31212',
          dark: '#b80e0e',
          light: '#ff2828',
        },
        bg: {
          DEFAULT: '#F7F8FA',
          2: '#EDEEF2',
        },
        text: {
          DEFAULT: '#0D1B2A',
          2: '#4A5568',
          3: '#8A9BB0',
        },
        border: '#DDE3ED',
      },
      fontFamily: {
        heading: ['Anton', 'sans-serif'],
        body: ['Geist', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
    },
  },
  plugins: [],
}
export default config
