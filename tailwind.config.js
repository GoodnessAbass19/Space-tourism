/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url('/assets/home/bg-desktop.jpg')",
        "home-tablet": "url('/assets/home/bg-home-tablet.jpg')",
        "home-mobile": "url('/assets/home/bg-home-mobile.jpg')",
        "destination-desktop":
          "url('/assets/destination/bg-destination-desktop.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
