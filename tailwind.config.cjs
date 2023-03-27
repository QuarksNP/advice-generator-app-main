/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-Blue" : "hsl(218, 23%, 16%)",
        "Dark-Grayish-Blue" : "hsl(217, 19%, 24%)",
        "Grayish-Blue" : "hsl(217, 19%, 38%)",
        "Light-Cyan" : "hsl(193, 38%, 86%)",
        "Neon-Green" : "hsl(150, 100%, 66%)"

      },
      
      fontFamily: {
        "Manrope" : ['Space Grotesk', 'sans-serif']
      },
    },
  },
  plugins: [],
}
