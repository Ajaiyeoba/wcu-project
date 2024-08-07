/** @type {import('tailwindcss').Config} */
export default {
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
  
}