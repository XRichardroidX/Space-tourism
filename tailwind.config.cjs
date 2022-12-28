/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "hsl(var(--clr-black))",
      blue: "hsl(var(--clr-lightblue))",
      white: "hsl(var(--clr-white))",
      slate: "hsl(var(--clr-white)/ .7)",
      circle: "hsl(var(--clr-white)/ .2)",
    },
    fontSize: {
      xlg: "var(--fs-xlg)",
      lg: "var(--fs-lg)",
      md: "var(--fs-md)",
      sm: "var(--fs-sm)",
      xsm: "var(--fs-xsm)",
      xxsm: "var(--fs-xxsm)",
      xxxsm: "var(--fs-xxxsm)",
    },
    fontFamily: {
      bellefair: "var(--ff-bellefair)",
      barlow: "var(--ff-barlow)",
    },
    extend: {},
  },
  plugins: [],
};
