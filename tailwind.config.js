/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'charade': {
          '50': '#f6f7f9',
          '100': '#ecedf2',
          '200': '#d5d7e2',
          '300': '#b1b6c8',
          '400': '#868faa',
          '500': '#677090',
          '600': '#525977',
          '700': '#434861',
          '800': '#3a3f52',
          '900': '#343746',
          '950': '#282a36',
        },
      },
    },
  },
  plugins: [],
};
