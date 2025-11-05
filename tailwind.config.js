/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#F7F3E3',
        dark: '#0B3954',
      },
    },
  },
  plugins: [],
}

