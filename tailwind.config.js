module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          300: "#fbe526",
        },
        neutral: {
          300: "#d4d4d4",
        },
        stone: {
          900: "#1f1f1f",
          950: "#686868",
        },
      },
    },
  },
};
