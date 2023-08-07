/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',   // modify this for 'sm' breakpoint
      'md': '920px',   // modify this for 'md' breakpoint
      'lg': '1080px',  // modify this for 'lg' breakpoint
      'xl': '1270px',  // modify this for 'xl' breakpoint
      '2xl': '1563px', // modify this for '2xl' breakpoint
    },
    extend: {
      gridTemplateColumns: {
        '60-40': '60% 40%',
      },
      backgroundImage: {
        'mobile': "url('/images/bg-mobile.svg')",
        'desktop': "url('/images/bg-desktop.svg')",
        'illustration': "url('/images/illustration-mockups.svg')",
      },
      fontWeight: {
        'normal': 400,
        'semibold': 600,
        'bold': 700,
      },
      fontFamily: {
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          violet: 'hsl(257, 40%, 49%)',
          softmagenta: 'hsl(300, 69%, 71%)',
        },
      },
    },
  },
  plugins: [],
}
