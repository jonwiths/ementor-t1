/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'about-header-bg': "url('/src/assets/background/sample-page-bg.jpg')"
      }
    }
  },
  plugins: []
};
