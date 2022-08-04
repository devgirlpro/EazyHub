const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [Myclass],
};

// module.exports = {
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   mode: "jit",
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     fontFamily: {
//       display: ["Open Sans", "sans-serif"],
//       body: ["Open Sans", "sans-serif"],
//     },
//     extend: {
//       screens: {
//         mf: "990px",
//       },
//       keyframes: {
//         "slide-in": {
//           "0%": {
//             "-webkit-transform": "translateX(120%)",
//             transform: "translateX(120%)",
//           },
//           "100%": {
//             "-webkit-transform": "translateX(0%)",
//             transform: "translateX(0%)",
//           },
//         },
//       },
//       animation: {
//         "slide-in": "slide-in 0.5s ease-out",
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/forms")],
// };
