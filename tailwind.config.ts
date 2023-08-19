/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0A196F",
          800: "#102587",
          700: "#1A37A7",
          600: "#264BC8",
          500: "#3563E9",
          400: "#658DF1",
          300: "#85A8F8",
          200: "#AEC8FC",
          100: "#D6E4FD",
        },
        secondary: {
          900: "#040815",
          800: "#080C19",
          700: "#0D121F",
          600: "#131825",
          500: "#1A202C",
          400: "#596780",
          300: "#90A3BF ",
          200: "#C3D4E9",
          100: "#E0E9F4",
        },
        success: {
          900: "#3B6506",
          800: "#4C7A0B",
          700: "#659711",
          600: "#7FB519",
          500: "#9CD323",
          400: "#BCE455",
          300: "#D3F178",
          200: "#E8FAA6",
          100: "#F5FCD2",
        },
        error: {
          900: "#7A0619",
          800: "#930B16",
          700: "#B71112",
          600: "#DB2719",
          500: "#FF4423",
          400: "#FF7F59",
          300: "#FFA37A",
          200: "#FFC8A6",
          100: "#FFE7D3",
        },
        warning: {
          900: "#7A4D0B",
          800: "#936312",
          700: "#B7821D",
          600: "#DBA32A",
          500: "#FFC73A",
          400: "#FFD96B",
          300: "#FFE488",
          200: "#FFEFB0",
          100: "#FFF8D7",
        },
        information: {
          900: "#102E7A",
          800: "#1A4393",
          700: "#2A60B7",
          600: "#3D81DB",
          500: "#54A6FF",
          400: "#7EC2FF",
          300: "#98D3FF",
          200: "#BAE5FF",
          100: "#DCF3FF",
        },
      },
      backgroundImage: {
        "img-shadow-buttom":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 85%, #FFF 100%);",
      },
      borderRadius: {
        btn: "10px",
      },
    },
    screens: {
      "2xl": { min: "1535px" },
      // => @media (min-width: 1535px) { ... }

      xl: { min: "1279px" },
      // => @media (min-width: 1279px) { ... }

      lg: { min: "1023px" },
      // => @media (min-width: 1023px) { ... }

      md: { min: "767px" },
      // => @media (min-width: 767px) { ... }

      sm: { min: "639px" },
      // => @media (min-width: 639px) { ... }

      "max-2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "max-xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "max-lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "max-md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "max-sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
