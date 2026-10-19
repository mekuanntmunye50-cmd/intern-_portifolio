/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          300: 'rgb(var(--accent-light-rgb) / <alpha-value>)',
          400: 'rgb(var(--accent-rgb) / <alpha-value>)',
          500: 'rgb(var(--accent-strong-rgb) / <alpha-value>)',
        },
        slate: {
          50: 'rgb(var(--slate-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--slate-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--slate-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--slate-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--slate-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--slate-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--slate-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--slate-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--slate-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--slate-900-rgb) / <alpha-value>)',
          950: 'rgb(var(--slate-950-rgb) / <alpha-value>)',
        },
        white: 'rgb(var(--white-rgb) / <alpha-value>)',
        navy: {
          950: 'rgb(var(--navy-950-rgb) / <alpha-value>)',
          900: 'rgb(var(--navy-900-rgb) / <alpha-value>)',
          800: 'rgb(var(--navy-800-rgb) / <alpha-value>)',
          700: 'rgb(var(--navy-700-rgb) / <alpha-value>)',
        },
        accent: {
          DEFAULT: '#38bdf8',
          soft: '#0ea5e9',
          violet: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
