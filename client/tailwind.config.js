/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    device: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      
      'laptop': '1024px',

      'desktop': '1280px',
    },
  },
  plugins: [],
}
