module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths if necessary
  theme: {
    extend: {
      colors: {
        gray: "#f7f7f7",
        green: "#008b4b",
        yellow: "#f8c144",
        red: "red",
        border_gray: "rgba(0, 0, 0, 0.09)",
        __blue: "#2a9dcc",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(29.61deg, #f38334 0%, #da2e7d 50.39%, #6b54c6 100%)",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      boxShadow: {
        custom: "0 1px 2px rgba(0, 0, 0, 0.08)",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideOut: {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
        },
        FilterActive: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        FilterActiveOut: {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        __Modal: {
          "0%": {
            transform: "translateY(-30px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        userActive: {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in-out",
        slideOut: "slideOut 0.5s ease-in-out",
        FilterActive: "FilterActive 0.5s ease-in-out",
        FilterActiveOut: "FilterActiveOut 0.5s ease-in-out",
        __Modal: "__Modal 0.5s ease-in-out",
        userActive: "userActive 0.5s ease-in-out",
        shake: "shake 0.82s ease-in-out",
      },
    },
  },
  plugins: [],
};
