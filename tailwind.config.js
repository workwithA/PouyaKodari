/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        blackOps: "Black Ops One",
        roboto: "Roboto"
      }
    },
  },
  plugins: [],
}

