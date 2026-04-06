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
      keyframes: {
        blobPulse: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '80%': { transform: 'scale(1.14)', opacity: '0.8' },
          '100%': { transform: 'scale(1.2)', opacity: '0' },
        }
      },
      animation: {
        'blob-pulse': 'blobPulse 10s linear infinite',
      }
    },
  },
  plugins: [],
}
