/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        none: '0',
        '4.5xl': '2.625rem',
      },
      colors: {
        'date-pink-500': '#FB81B2',
        'date-pink-700': '#FF3888',
        'date-blue-500': '#AA99FE',
        'date-blue-600': '#846FFE',
        'date-blue-700': '#6045FF',
        'date-gray-700': '#383737',
        'date-gray-400': '#797C7B',
        'date-gray-300': '#979797',
        'date-gray-200': '#D1D1D6',
        'date-gray-100': '#F2F7FB',
      },
      width: {
        168: '42rem',
      },
      height: {
        168: '42rem',
      },
      inset: {
        104: '26rem',
      },
      minWidth: {
        10: '2.5rem',
        '2/3': '66.666667%',
        '3/4': '75%',
        '7/12': '58.333333%',
      },
      maxWidth: {
        10: '2.5rem',
        '2/3': '66.666667%',
        '3/4': '75%',
        '7/12': '58.333333%',
      },
    },
  },
};
