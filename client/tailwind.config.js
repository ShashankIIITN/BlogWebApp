/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage:{
        'loginBG1' : "url('./assets/5297078.jpg')",
        'loginBG2' : "url('./assets/5073414.jpg')",
        'loginBG21' : "url('./assets/5073414inv.jpg')"
      },
      boxShadow: {
        '3xl': '0 0px 10px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
