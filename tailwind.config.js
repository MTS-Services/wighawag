/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'md': '768px',    // Tablet
        'lg': '1024px',   // Laptop
        '2xl': '1536px',  // 1920px Desktop
        '3xl': '2560px',  // 2560px Desktop
        '4xl': '3072px',  // ADD THIS LINE for 3072px screens
      },
    },
  },
  plugins: [],
};