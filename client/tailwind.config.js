/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '440px',
      // => @media (min-width: 440px) { ... }

      'md': '768px',      
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}

