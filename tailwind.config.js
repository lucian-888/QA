/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js Pages Router (if used)
    "./components/**/*.{js,ts,jsx,tsx}", // For your components
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#DC143C',
      }
    },
  },
  plugins: [],
};

