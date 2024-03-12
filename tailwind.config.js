/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
      colors:{
        'blackbg':"#1c1c1c",
        'green':"#2BB32A",
        'gray':"#ADB2B1",
        'gray1':"#B9BEBD",
        'gray2':"#3D544D",
        'gray3':"#EDEDED",
        'gray4':"#424242",
      }
    },
  },
  plugins: [],
}
