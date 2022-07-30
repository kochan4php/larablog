const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    container: {
      padding: 16,
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        lexend: ["Lexend Deca"],
      },
      colors: {
        danger: "#dc2626",
        success: "#16a34a",
        warning: "#eab308",
        primary: "#fa5398",
        dark: "#171717",
        light: "#ffffff",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
};
