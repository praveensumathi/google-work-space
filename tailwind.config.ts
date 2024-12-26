import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0E21C9",
        secondary: "#0E21C9",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to left, #0E21C9, #0E21C9, #0E21C9, #0E21C9, #0E21C9)",
        "title-gradient": "linear-gradient(93deg, #0E21C9 0%, #0E21C9 111%)",
      },
      textShadow: {
        custom: "0px 5px 10px #000",
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-custom": {
          textShadow: "0px 5px 10px #000",
        },
      });
    },
  ],
} satisfies Config;
