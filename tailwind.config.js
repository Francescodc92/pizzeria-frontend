/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C83B1A",
      },
      backgroundImage: {
        cielo: "url('/src/assets/img/cielostellato.PNG')",
        urban: "url('/src/assets/img/h3-rev-img-5.png')",
        taste: "url('/src/assets/img/h3-rev-img-3.png')",
        crust: "url('/src/assets/img/h3-rev-img-1.png')",
        testimonials: "url('/src/assets/img/h3-testimonials-bckgrnd.jpg')",
        bigImg: "url('/src/assets/img/h3-background-img.jpg')",
        events: "url('/src/assets/img/h3-img-5a.jpg')",
        reservations: "url('/src/assets/img/h3-background-img-3.jpg')",
        footerImg: "url('/src/assets/img/footer-img-1.jpg')",
        footerLogo: "url('/src/assets/img/footer-bottom-img.png')",
      },
    },
  },
  plugins: [],
};
