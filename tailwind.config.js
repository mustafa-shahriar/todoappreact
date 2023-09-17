/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    keyframes: {
      fadeIn: {
        from: {
          opacity: 0,
          transform: "translateY(0.5rem)", // Optional: Add a slight upward translation
        },
        to: {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
      pulse: {
        "0%": {
          opacity: 0.5,
          transform: "scale(0.95)",
        },
        "50%": {
          opacity: 1,
          transform: "scale(1)",
        },
        "100%": {
          opacity: 0.5,
          transform: "scale(0.95)",
        },
      },
    },
    animation: {
      "fade-in": "fadeIn 0.5s ease-out", // Define the "fade-in" animation class with ease-out timing function
      "pulse": "pulse 2s ease-in-out infinite", // Define the "pulse" animation class with ease-in-out timing function and longer duration
    },
  },
  plugins: [],
}

