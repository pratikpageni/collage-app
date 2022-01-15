module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "forest",
      "emerald", // first one will be the default theme
      "dark",
      "synthwave",
    ],
  },
};
