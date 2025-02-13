/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      transitionDuration: {
        "500": "500ms",
        "600": "600ms",
      },
      
      screens: {
        "msm": { "max": "640px" },
        "@2xl": { "max": "672px" },
        "@xl": { "max": "576px" },
        "@lg": { "max": "512px" },
        "@md": { "max": "448px" },

        "ssm": { "max": "768px"},
        "xssm": {"max": "517px"},
        "2xssm": {"max": "480px"},
        "3xssm": {"max": "321px"},
      },
      colors: {
        // ----------------background color---------------------------------- 
        primary: "#EE3E0C",
        secondary: "#EDF2F6",

        bg_white: "#ffffff",
        bg_black: "#000000",

        bg_gray_100: "#f3f4f6",
        bg_gray_400: "#9ca3af",
        bg_gray_600: "#D2D5D8",
        bg_gray_light: "#D2D6FF",

        bg_red_400: "#EF5350",
        bg_red_200: "#fecaca",
        bg_red_500: "#EE3F0B",
        //----------------------------border color--------------------------------
        bo_black: "#000000",
        bo_red_500: "#EE3F0B",
        bo_gray_300: "#d1d5db",

        // ----------------------text color-----------------------------

        co_white: "#ffff",
        co_black: "#000000",
        co_blue_500: "#2F80ED",
        co_gray_400: "#9ca3af",
        co_gray_700: "#374151",
        co_green_500: "#219653",
        co_red_400: "#EF5350",
        co_red_500: "#EE3F0B",
        co_ping_500: "#EF5DA8",

        // --------------------------hover background color--------------------------
        hov_white: "#ffff",
        hov_red_400: "#EF5350",
        hov_red_500: "#EE3F0B",
        hov_gray_100: "#EDF2F6",

        // ------------------------------hover text color-------------------------------        
        hoc_white: "#ffff",
        hoc_red_400: "#EF5350",

        //--------------------------------------active text color---------------------
        act_white: "#ffff",
        act_gray_400: "#9ca3af",


      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tast: ['"Jersey 15"', 'serif'],
      },
    },
  },
  plugins: [
  ],

};
