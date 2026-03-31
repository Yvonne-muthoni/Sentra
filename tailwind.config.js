export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [
    'font-opensans',
    'font-montserrat'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },

      // ✅ ADD THIS PART
      colors: {
        primary: "#2563EB",   // Blue
        secondary: "#008000", // Green
        accent: "#FFA500",    // Yellow
      },
    },
  },
}