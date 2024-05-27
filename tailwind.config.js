/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#C83B1A',
      },
      backgroundImage: {
        'cielo': "url('/src/assets/img/cielostellato.PNG')",
        'urban':"url('/src/assets/img/h3-rev-img-5.png')",
        'taste':"url('/src/assets/img/h3-rev-img-3.png')",
        'crust':"url('/src/assets/img/h3-rev-img-1.png')",
      },
    },
  },
  plugins: [],
}

