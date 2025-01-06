/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
      },
      width: {
        200: "220px",
      },
      fontFamily: {
        inter: ['"Inter Tight"', "sans-serif"],
      },
      inset: {
        45: "10%",
      },
      boxShadow: {
        right: "3px 0px 4px 1px rgba(0, 0, 0, 0.1)",
        subtract: "-19px 18px 0px 0px rgba(0, 0, 0, 1)",
        subtractafter: "-19px -18px 0px 0px rgba(0, 0, 0, 1)",
      },
      inset: {
        fixtop: "-28px",
        fix: "15px",
        fixtopafter: "38px",
        fixafter: "15px",
      },
    },
  },
  plugins: [],
};
