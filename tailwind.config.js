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
      listStyleType: {
        alpha: 'upper-alpha'
      },
      fontFamily: {
        sans: ['OpenSans', 'ui-sans-serif', 'system-ui'],
        gilroy: ['Gilroy', 'ui-sans-serif', 'system-ui'],
        ind: ['Industry', 'ui-sans-serif', 'system-ui'],
        tusker: ['TuskerGrotesk', 'ui-sans-serif', 'system-ui'],
        noodle: ['BigNoodleTitling', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        purple: {
          700: "#7d00cc"
        },
        pink: {
          300: "#d340d7"
        },
        yellow: {
          300: "#f7b944"
        },
        violet: {
          800: "#7023cc"
        },
        stone: {
          900: "#1f1f1f",
          950: "#686868"
        },
      },
    },
  },
};
