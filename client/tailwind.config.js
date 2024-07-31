/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "rgba(0, 0, 0, 0.5)",
        "secondary-2": "#db4444",
        button: "#000",
        secondary: "#f5f5f5",
        text: "#fafafa",
        salmon: "#f55e5e",
        springgreen: "rgba(0, 255, 102, 0.6)",
      },
      spacing: {},
      fontFamily: {
        "title-14px-semibold": "Poppins",
        "heading-24px-regular": "Inter",
      },
      borderRadius: {
        "11xs-4": "1.4px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xs: "12px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
