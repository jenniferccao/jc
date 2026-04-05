/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FCF5E5',
        foreground: '#3E4875',
        green: '#42C790',
        yellow: '#FFD151',
        pink: '#FF73DC',
      },
    },
  },
  plugins: [],
}
