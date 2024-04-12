/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      cforange: {
        50: "#FEF8F1",
        100: "#FCEEDE",
        200: "#F9DDBD",
        300: "#F6CC9C",
        400: "#F4BC7C",
        500: "#F1AB5D",
        600: "#EC8B1E",
        700: "#B76910",
        800: "#7A460B",
        900: "#3D2305",
        950: "#211303",
      },
    },
  },
  plugins: [],
};
