module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0f0f0f",
          secondary: "#1a1a1a",
          tertiary: "#2a2a2a"
        },
        accent: {
          warm: "#c4a590",
          sage: "#9ca98a"
        }
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        slideUp: "slideUp 0.5s ease-out"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
}
