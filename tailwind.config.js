/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'navbar-bawah': '#111827',
        'navbar-atas': '#0C101A',
        'warna-div': '#2CB67D'
      },
      fontFamily: {
        'roboto': ["Roboto"],
        'Shantell_Sans': ["Shantell Sans"],
        'Gloock': ["Gloock"]
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: [],
}
