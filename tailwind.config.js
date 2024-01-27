/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        'mobileScreen': {'max': '500px'},
      },
    },
  },
  variants: {},
  plugins: [],
}
