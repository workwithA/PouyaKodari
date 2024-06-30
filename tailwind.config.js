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
      },
      screens:{
        375: "375px",
        425: "425px",
        510: "510px"
      }
    },
  },
  plugins: [],
}

