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
          '0%': { transform: 'scale(0.7)', opacity: '0' },
          '50%': { transform: 'scale(1.0)', opacity: '0.8' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        }
      },
      animation: {
        'blob-pulse': 'blobPulse 15s linear infinite',
      }
    },
  },
  plugins: [],
}
