/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgBlue: 'rgb(16, 22, 31)',
        primaryBlue: 'rgb(23, 30, 39)',
        secondaryBlue: 'rgba(54, 64, 80, 0.398)',
        mintGreen: '#8ea9a8',
        icyWhite: '#c7d2ee',
        gradient: 'linear-gradient(90deg, #97bbaa 0%, #64acff 100%)',
      },
      fontFamily: {
        josefin: ['Josefin Sans'],
        roboto: ['Roboto'],
        inter: ['inter'],
      },
    },
  },
  plugins: [],
};
