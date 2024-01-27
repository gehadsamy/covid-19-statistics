/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      colors: {
        light: '#F3F4F6', // Light mode color
        dark: '#1F2937',  // Dark mode color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
