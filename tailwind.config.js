/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009CA3',
        secondary: '#2B0D61',
        colorText: '#404040',
        border: '#00000029',
        white: '#fff',
        wistful: '#b5abd4',
        alabaster: '#fbfbfb',

      },
      boxShadow: {
        customHeader: '0px 4px 8px rgba(0, 0, 0, 0.19)',
        custom: '0px 2px 4px rgba(0, 0, 0, 0.19)',
        customTag:'0px 1px 2px rgba(0, 0, 0, 0.19)'
      },
    },
  },
  plugins: [],
}
