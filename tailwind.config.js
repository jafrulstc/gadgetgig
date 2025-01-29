/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        "msm": { "max": "640px"},
        "@2xl": { "max": "672px" },
        "@xl": { "max": "576px" },
        "@lg": { "max": "512px" },
        "@md": { "max": "448px" },

      }
    },
  },
  plugins: [
  ],
  
};
