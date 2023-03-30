/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7957d6",

          "secondary": "#2dd300",

          "accent": "#e5a0bf",

          "neutral": "#2A2C37",

          "base-100": "#FFFFFF",

          "info": "#5EC6F3",

          "success": "#45D3C3",

          "warning": "#F4AE34",

          "error": "#FB5671",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

