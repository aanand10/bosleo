/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secTextCol: "#6A6A6A",
        bgColor: "#f7f7f7",
        trending: "#7281D3",
        category: "#D1D8F7",
        catText: "#4755A8",
        tableHeadBg: "#F5F5F5",
        tableBoarder: "#E0E0E0",
      },
      text: {
        xxs: "10px",
      },
    },
  },

  plugins: [],
};
