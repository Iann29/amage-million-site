import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#151515",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#D8AE63",
          foreground: "#151515",
        },
        secondary: {
          DEFAULT: "#C5C5C5",
          foreground: "#151515",
        },
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#C5C5C5",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D8AE63",
          foreground: "#151515",
        },
        border: "#2A2A2A",
        input: "#2A2A2A",
        ring: "#D8AE63",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 10s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(216, 174, 99, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(216, 174, 99, 0.8)" },
        },
        pulseSubtle: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;