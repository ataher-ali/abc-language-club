/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    mytheme: {
    
"primary": "#a0c5e5",
    
"secondary": "#872db7",
    
"accent": "#f9e190",
    
"neutral": "#201f28",
    
"base-100": "#f0f2f5",
    
"info": "#3198ed",
    
"success": "#26dfb3",
    
"warning": "#bd8d14",
    
"error": "#e9536f",
    },
  
  },
  plugins: [require("daisyui")],
}

