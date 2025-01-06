/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        toggle: {
          on: "#FCD34D", // Warna untuk keadaan ON
          off: "#4B5563", // Warna untuk keadaan OFF
          hover: "#FBBF24", // Warna saat hover di keadaan ON
          hoverOff: "#6B7280", // Warna saat hover di keadaan OFF
          focus: "#F59E0B", // Warna saat fokus di keadaan ON
          focusOff: "#9CA3AF", // Warna saat fokus di keadaan OFF
        },
      },
      width: {
        100: "40rem",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
      },
      height: {
        100: "40rem",
        "100vh": "100vh",
        "90vh": "90vh",
        "80vh": "80vh",
        "60vh": "60vh",
        "50vh": "50vh",
        "40vh": "40vh",
        "30vh": "30vh",
        "20vh": "20vh",
        "10vh": "10vh",
        "0vh": "0vh",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 0px 15px -1px rgba(0, 0, 0, 0.1), 0 2px 4px 0px rgba(0, 0, 0, 0.06)",
        lg: "0 0px 15px 3px rgba(0, 0, 0, 0.1), 0 4px 6px 2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      inset: {
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "70%": "70%",
      },
      padding: {
        "15%": "3%",
      },
      margin: {
        "3%": "3%",
      },
      animation: {
        fadeInright: "fadeInright 0.7s ease-in forwards",
        fadeInleft: "fadeInleft 0.7s ease-in forwards",
      },
      keyframes: {
        fadeInleft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)", // Perbaiki penulisan translateX
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)", // Perbaiki penulisan translateX
          },
        },
        fadeInright: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)", // Perbaiki penulisan translateX
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)", // Perbaiki penulisan translateX
          },
        },
      },
      screens: {
        mobiles: "320px",
        mobilem: "375px",
        mobilel: "425px",
        tablet: "770px",
        mobilel: "1024px",
        laptopl: "1440px",
        xxl: "2560px",
      },
      fontSize: {
        10: "0.775rem",
        8: "0.675rem",
        6: "0,575rem",
      },
      fontFamily: {
        inter: ['"Inter Tight"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
