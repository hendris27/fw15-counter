/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui:{
    themes: [{
      defaultTheme: {
        primary:'#f8f9fa',
        secondary:'red'
      }
    }]
  },
  plugins: [
    require("daisyui")
  ],
}

