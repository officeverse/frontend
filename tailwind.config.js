// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    // "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./screens/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./onboarding/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  variants: {
    extend: {
      backgroundOpacity: ["active"],
    },
  },
};
