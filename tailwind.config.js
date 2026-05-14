export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Allura', 'cursive'],
        'body': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-bg': '#fcf7ed',
        'custom-text': '#3e3e3e',
        'custom-button': '#7A8F7B',
        'custom-button-text': '#F7F5F2',
      },
    },
  },
  plugins: [],
}