/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#025266',
        'blue-secondary': '#42A3BB',
        'red-primary':'#660225',
        'yellow-primary': '#CBD126',
      },
    },
  },
  plugins: [],
}