/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'khoury-yellow': '#ffbe3b',
      'khoury-red': '#de3b2c',
      'khoury-blue': '#006eb5',
      'khoury-cyan': '#51cfe5',
      'khoury-teal': '#00cfb5',
      'khoury-dark': '#385775',
      'khoury-light': '#f5f5f5',
      'khoury-secondary': '#5d5d5d'
    }
  },
  plugins: [],
}
