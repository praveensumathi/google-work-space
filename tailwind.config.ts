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
        primary: "#5945d2",
        secondary: "#04c8eb",
      },

      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to left, #04c8eb, #00aff3, #0092f6, #0071ed, #5945d2)",
        "title-gradient": "linear-gradient(93deg, #0095da 0%, #ed1c24 111%)",
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
