/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        moreira: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          500: "#963E15", // Terracota do Logo
          600: "#7a310f",
          900: "#2b1206", // Marrom escuro para contraste
        },
      },
      fontFamily: {
        sans: ['"Outfit"', "sans-serif"], // Fonte moderna
      },
    },
  },
  plugins: [],
};
