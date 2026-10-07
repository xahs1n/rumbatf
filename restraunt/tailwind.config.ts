import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0b",
          50: "#f6f6f7",
          900: "#0a0a0b",
          950: "#050506",
        },
        rumbaGreen: {
          DEFAULT: "#8bd94e",
          light: "#a3e86c",
          soft: "#baf28c",
          deep: "#65b527",
        },
        rumbaOrange: {
          DEFAULT: "#ff7f11",
          light: "#ffa04d",
          deep: "#d96504",
        },
        cream: "#f7f3ea",
        smoke: "#a1a1aa",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "green-gradient":
          "linear-gradient(135deg, #a3e86c 0%, #8bd94e 45%, #65b527 100%)",
        "orange-gradient":
          "linear-gradient(135deg, #ffa04d 0%, #ff7f11 50%, #d96504 100%)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(139,217,78,0.18), transparent 60%)",
      },
      boxShadow: {
        luxe: "0 30px 80px -20px rgba(0,0,0,0.6)",
        green: "0 20px 60px -15px rgba(139,217,78,0.4)",
        orange: "0 20px 60px -15px rgba(255,127,17,0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
