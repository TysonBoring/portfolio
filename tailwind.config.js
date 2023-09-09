/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        secondary: '#3490DC',
      },
      fontFamily: {
        custom: ['sans', 'sans'],
      },
      // Add more customizations as needed
    },
  },
  plugins: [
    // Add other plugins as needed
  ],
}

