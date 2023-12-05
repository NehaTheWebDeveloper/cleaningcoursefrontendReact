/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "graybg" :"#006a4e",
        "btn":"#4CBF84",
        "lightpurple":"#EFEFEF",
        "bottlegreen":"#6EA08A"
      },
      screens: {
        'xs': '300px', // Define your custom breakpoint for mobile XS
      },
    },
  },

  plugins: [],
}

