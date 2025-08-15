/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#feeee0',
          200: '#fcd9bf',
          300: '#f9bd94',
          400: '#f59e6a',
          500: '#f17d47',
          600: '#e85d24',
          700: '#c44d1c',
          800: '#9c3d16',
          900: '#7c3112',
        },
        secondary: {
          50: '#f9f7f4',
          100: '#f1ede6',
          200: '#e5ddd0',
          300: '#d4c7b3',
          400: '#bfad94',
          500: '#a89478',
          600: '#8f7d65',
          700: '#756854',
          800: '#5d5247',
          900: '#4a423a',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f4f4f3',
          200: '#e6e6e4',
          300: '#d1d1cd',
          400: '#b5b5b0',
          500: '#9a9a94',
          600: '#7c7c76',
          700: '#5f5f5a',
          800: '#434340',
          900: '#2a2a28',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
