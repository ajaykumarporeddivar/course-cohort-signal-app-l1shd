module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          900: "#2c2e33",
          100: "#f7f7f7",
        },
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

// postcss.config.js
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-preset-env")({
      browsers: ["last 4 versions", "ie >= 10", "safari >= 5"],
      stage: 3,
    }),
  ],
};