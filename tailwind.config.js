/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        "97" : "440px",
        "98" : "350px",
        "99" : "470px",
        "100" : "570px",
        "101" : "990px",
        "102" : "540px",
        "103" : "644px",
        "104" : "520px",
        "105" : "700px",
        "106" : "500px",
        "107" : "580px",
        "108" : "800px",
        "109" : "1040px",
        "110" : "420px",
        "111" : "664px",
        "112" : "450px",
      }
    },
  },
  plugins: [],
}
