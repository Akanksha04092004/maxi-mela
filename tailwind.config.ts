import type { Config } from "tailwindcss";

// Palette extracted from the MAXI Mela logo (lotus + wordmark artwork):
//   maroon  – lotus petals (primary)
//   gold    – "MAXI" wordmark (secondary)
//   navy    – "Mela" panel background (accent / shell)
//   green   – leaf sprigs (accent)
//   cream   – artwork base (page background)
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#B31E42",
          deep: "#7C1230",
          light: "#D65C7C",
        },
        gold: {
          DEFAULT: "#E3A233",
          deep: "#B87A16",
          pale: "#F3D48F",
        },
        navy: {
          DEFAULT: "#131B34",
          light: "#232C4C",
        },
        leaf: {
          DEFAULT: "#4C6B3A",
          deep: "#33492A",
        },
        cream: {
          DEFAULT: "#F7F0E1",
          dark: "#EEE3CC",
        },
        ink: "#241A14",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 12px 30px -14px rgba(19, 27, 52, 0.35)",
      },
      borderRadius: {
        arch: "999px 999px 12px 12px",
      },
    },
  },
  plugins: [],
};
export default config;
