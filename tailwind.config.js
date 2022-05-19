module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,

    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1024px',
          },
        }
      })
    }
  ],
}