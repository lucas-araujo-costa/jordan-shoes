/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-white": "#f3f7ff",
      },
      backgroundImage: {
        "base-image": "url('src/assets/img/Hero/image-michael-jordan.png')"
      }
    },
  },
  plugins: [],
}