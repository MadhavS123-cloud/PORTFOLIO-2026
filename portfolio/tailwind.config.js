/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00f5ff',
          violet: '#7c3aed',
          indigo: '#4f46e5',
          pink: '#ec4899',
          glow: 'rgba(0, 245, 255, 0.15)',
        },
        surface: {
          0: '#050810',
          1: '#0a0f1e',
          2: '#111827',
          3: '#1e2740',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#475569',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
