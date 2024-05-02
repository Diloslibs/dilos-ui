/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./build/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("./plugin.js"),
  ],
}

