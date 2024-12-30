/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s linear infinite',
        'gradient-xy': 'gradient-xy 6s linear infinite',
      },
    },
  },
  plugins: [],
};