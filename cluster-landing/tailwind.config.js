module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
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
      }
    }
  },
  plugins: []
}
