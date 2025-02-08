/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': 'var(--color-black)',
        'border-dark': 'var(--border-color-dark)',
        'bg-cards-dark': 'var(--bg-cards-dark)',
        'bg-cards': 'var(--bg-cards)',
        'primary-color-dark': 'var(--border-color-dark)',
        'primary-color': 'var(--primary-color)',
        'card-color-border': 'var(--border-color-card)'
      }
    },
  },
  plugins: [],
}
 