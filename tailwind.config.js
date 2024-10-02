/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        autoRun: {
          from: { left: '100%' },
          to: { left: 'calc(var(--width) * -1)' },
        },
        reversePlay: {
          from: { left: 'calc(var(--width) * -1)' },
          to: { left: '100%' },
        },
      },
      animation: {
        autoRun: 'autoRun 30s linear infinite', // Increased to 30 seconds
        reversePlay: 'reversePlay 30s linear infinite', // Increased to 30 seconds
      },
    },
  },
  plugins: [],
}

