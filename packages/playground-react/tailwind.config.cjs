/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@dilos/libs/dist/*.js",
    // 'node_modules/libs/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('libs/plugin'),
  ],
}

