/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fff",
        button: "#000",
        gray: {
          "100": "#0d0d0d",
          "200": "rgba(0, 0, 0, 0.7)",
          "300": "rgba(255, 255, 255, 0.5)",
          "400": "rgba(0, 0, 0, 0.4)",
          "500": "rgba(0, 0, 0, 0.3)",
          "600": "rgba(0, 0, 0, 0.5)",
          "700": "rgba(250, 250, 250, 0.4)",
          "800": "rgba(250, 250, 250, 0.7)",
        },
        text: "#fafafa",
        button2: "#db4444",
        salmon: "#f55e5e",
        secondary: "#f5f5f5",
        darkslategray: {
          "100": "rgba(51, 51, 51, 0.5)",
          "200": "rgba(51, 51, 51, 0.09)",
        },
        button1: "#00ff66",
        gainsboro: "rgba(217, 217, 217, 0.3)",
        limegreen: "#00cc33",
        "hover-button": "#e07575",
        powderblue: "#cbe4e8",
      },
      spacing: {},
      fontFamily: {
        "title-20px-semibold": "Poppins",
        "heading-32px-medium": "Inter",
      },
      borderRadius: {
        "24xl": "43px",
        "12xl": "31px",
        "11xs-4": "1.4px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      "13xl": "32px",
      "7xl": "26px",
      "35xl": "54px",
      "24xl": "43px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "2xs": "11px",
      "29xl": "48px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
