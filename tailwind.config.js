/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightblue: "#E9F1FA",
        brightblue: "#00ABE4",
        darkblue: "#111439",
        whitelilac: "#F8F8F9",
      },
    },
  },
  plugins: [],
};
