/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      height: {
        header: 'var(--oi-navbar-height)',
      },
      colors: {
        background: 'var(--oi-background)',
      },
    },
  },
  plugins: [],
}
