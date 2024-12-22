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
        primary: "#0891B2",
        secondary: "#CFFAFE",
        "primary-gradient": "linear-gradient(135deg, #0C869A 0%, #23B8CF 100%)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #0C869A 0%, #23B8CF 100%)",
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
