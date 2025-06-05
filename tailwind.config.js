/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E5F2FF',
          100: '#CCE5FF',
          200: '#99CBFF',
          300: '#66B0FF',
          400: '#3396FF',
          500: '#0078D7', // Azure blue (primary)
          600: '#0062B1',
          700: '#004C8C',
          800: '#003666',
          900: '#001F3F',
        },
        secondary: {
          50: '#F3F9FF',
          100: '#E7F3FF',
          200: '#C4E2FF',
          300: '#A1D1FF',
          400: '#7EBFFF',
          500: '#5BADFF',
          600: '#4990D9',
          700: '#3673B3',
          800: '#24578C',
          900: '#123A66',
        },
        accent: {
          50: '#FFF1E5',
          100: '#FFE2CC',
          200: '#FFC599',
          300: '#FFA866',
          400: '#FF8B33',
          500: '#FF6E00',
          600: '#D95E00',
          700: '#B34D00',
          800: '#8C3C00',
          900: '#662B00',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};