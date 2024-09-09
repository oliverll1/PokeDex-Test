/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        grayCustom: '#D5D5D5',
        grayCustomLight: '#E2E2E2',
        redCustom: '#F44',
        borderCustomLight: 'rgba(0, 0, 0, 0.10)'
      },
    },
  },
  plugins: [],
}

