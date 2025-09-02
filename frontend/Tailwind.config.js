/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        blue: {
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          950: "#0C1B33",
        },
        green: {
          400: "#4ADE80",
          500: "#22C55E",
        },
        purple: {
          400: "#A78BFA",
          500: "#8B5CF6",
        },
        neutral: {
          300: "#D1D5DB",
          400: "#9CA3AF",
          800: "#1F2937",
          900: "#111827",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "text-flicker": {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: 1 },
          "20%, 22%, 24%, 55%": { opacity: 0.2 },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "gradient-x": "gradient-x 10s ease infinite",
        "text-flicker": "text-flicker 2s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
