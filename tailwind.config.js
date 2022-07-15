/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#BAFF29",
          "base-100": "#0a0a0a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
