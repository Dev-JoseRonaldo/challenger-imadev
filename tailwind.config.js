/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
        secondary: 'Inter, sans-serif',
      },
      colors: {
        primary: '#074F97',
        gray: {
          500: '#4E4E4E',
        },
        blue: {
          700: '#222A4A',
        },
      },
      backgroundImage: {
        testimonial:
          'url(https://res.cloudinary.com/devjoseronaldo/image/upload/v1672868201/bg_evneu9.png)',
      },
    },
    plugins: [],
  },
}
