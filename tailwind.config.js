/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'custom-pri': '#000000', 
        'custom-sec': '#f1cd87', 
        'custom-ter': '#fff',
        'custom-blue': 'blue' 
    }, 
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    },
  },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  
});