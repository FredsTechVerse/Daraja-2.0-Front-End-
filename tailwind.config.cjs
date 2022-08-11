/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "phone": {"max":"639px"},
      // => @media (min-width: 640px) { ... }

      "tablet":  {"max":"1023px"},
      // => @media (min-width: 768px) { ... }

      "laptop":  {"max":"1279px"},
      // => @media (min-width: 1024px) { ... }

      "desktop": "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
