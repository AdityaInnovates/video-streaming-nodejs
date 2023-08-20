/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fbfbfd",
          "200": "#1d1d1f",
          "300": "#1d1d1d",
          "400": "rgba(29, 29, 31, 0)",
          "500": "rgba(255, 255, 255, 0)",
          "600": "rgba(29, 29, 31, 0.99)",
          "700": "rgba(255, 255, 255, 0.99)",
          "800": "rgba(0, 0, 0, 0.56)",
          "900": "rgba(0, 0, 0, 0.16)",
          "1000": "rgba(0, 0, 0, 0.8)",
        },
        whitesmoke: "#f5f5f7",
        darkslategray: "#424245",
        lightgray: "#d2d2d7",
        dimgray: "#6e6e73",
        royalblue: "#0066cc",
        white: "#fff",
        black: "#000",
        dodgerblue: "#2997ff",
      },
      fontFamily: { inter: "Inter" },
    },
    fontSize: {
      sm: "11px",
      base: "12px",
      lg: "14px",
      xl: "17px",
      "2xl": "18px",
      "3xl": "20px",
      "4xl": "21px",
      "5xl": "24px",
      "6xl": "36px",
      "7xl": "51px",
    },
  },
  corePlugins: { preflight: false },
};
