/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mani:['Baloo Thambi 2','system-ui'],
        karthi:["Oi", "serif"]
      }
    },
  },
  plugins: [],
}

