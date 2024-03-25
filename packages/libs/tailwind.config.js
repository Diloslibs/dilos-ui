/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      boxShadow: {
        "accordion": "0px 1px 2px 0px #1018280F, 0px 1px 3px 0px #1018281A",
        "accordion-outer": "0px 0px 0px 2px #FCFCFD, 0px 0px 0px 4px #121212",
        "button": "0px 0px 0px 2px #FCFCFD, 0px 0px 0px 4px #121212",
        "tooltip": "0px 3.5px 14px 0px #10182833",
      },
      colors: {
        // Primary
        "primary-100": "#ECF4FC",
        "primary-200": "#D8E9F9",
        "primary-300": "#9EC8F1",
        "primary-350": "#3D90E3",
        "primary-400": "#0354A6",
        "primary-500": "#064280",

        // Error
        "error-200": "#FDE1E1",
        "error-400": "#BB251A",
        "error-500": "#831A12",

        // Info
        "info-200": "#DCEDFC",
        "info-400": "#1465B4",
        "info-500": "#0C3D6C",

        // Success
        "success-200": "#D6F3E9",
        "success-400": "#039855",
        "success-500": "#045130",

        // Warning
        "warning-200": "#FCF0DB",
        "warning-400": "#DC6803",
        "warning-500": "#7F3004",

        // Gray
        "gray-50": "#FCFCFD",
        "gray-100": "#F2F4F7",
        "gray-500": "#667085",
        "gray-600": "#344054",
        "gray-700": "#101828",

        // Black
        base: "#121212",
      },
    },
  },
  plugins: [],
}

