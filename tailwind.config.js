module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '120': '120px',
      },
      colors: {
        'primary-blue': '#232F3E',
        'secondary-blue': '#37475A',
        'primary-orange': '#FF9E20',
        'secondary-orange': '#FEBD69',
        'secondary': '#FEBD69',
      },
      animation: {
        'spin-slow': '1s linear infinite spin',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
