/** @type {import('tailwindcss').Config} */

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {},
  screens: {
    // => @media (min-width: 440px) { ... }
    xs: "100px",
    sm: "481px",
    // => @media (min-width: 768px) { ... }
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};
export const plugins = [];
