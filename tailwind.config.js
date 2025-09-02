/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // We define custom breakpoints to precisely target the requested resolutions.
      // Tailwind is mobile-first, so styles without a prefix apply to all sizes.
      screens: {
        'md': '768px',    // Standard tablet breakpoint
        'lg': '1024px',   // Standard small laptop breakpoint
        'xl': '1280px',   // Targets 1280x800 resolution
        '2xl': '1920px',  // Targets 1920x1080 (FHD) resolution
        '3xl': '2560px',  // Targets 2560x1440 (QHD) resolution
      },
    },
  },
  plugins: [],
};