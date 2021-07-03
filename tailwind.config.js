const colors = require("tailwindcss/colors");
module.exports = {
  mode:'jit',
  purge: ["./dist/**/*.html", "./src/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        cyan:colors.cyan,
      },
      backgroundImage: (theme) => ({
        "hero-image": "url('assets/dkt.jpg')",
      }),
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 3s linear infinite",
      },
      boxShadow: {
        customsd: "opx 3px 3px -5px #00FF00,0px 2px 5px #F27092",
        "light-card":"12px 12px 16px 0 rgba(255, 255, 255, 0.3), -8px -8px 12px 0 rgba(0, 0, 0, .25)",
        "light-button":"6px 6px 8px 0 rgba(255, 255, 255, 0.3), -4px -4px 6px 0 rgba(0, 0, 0, .25)",
      },
      translate: {
        175: "175%",
      },
      fontFamily: {
        'cursive': ['Architects Daughter', 'cursive', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
