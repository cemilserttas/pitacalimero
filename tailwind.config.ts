import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-container": "#636563",
        "on-primary-fixed": "#161e00",
        "error-container": "#ffdad6",
        "surface-container-lowest": "#ffffff",
        "on-primary-container": "#3f5000",
        "surface-container-highest": "#e2e3e0",
        "inverse-surface": "#2f3130",
        "on-secondary-fixed-variant": "#454746",
        "surface-container-high": "#e8e8e6",
        "on-tertiary-container": "#4d4a3a",
        "on-secondary-fixed": "#1a1c1b",
        "inverse-on-surface": "#f1f1ee",
        "on-primary-fixed-variant": "#3c4d00",
        "primary-container": "#a7c64a",
        "outline": "#757966",
        "secondary": "#5d5f5d",
        "on-tertiary": "#ffffff",
        "primary": "#506600",
        "outline-variant": "#c5c8b3",
        "surface-tint": "#506600",
        "surface-container-low": "#f4f4f1",
        "surface": "#faf9f7",
        "on-surface-variant": "#454838",
        "on-error-container": "#93000a",
        "tertiary-container": "#bfbaa6",
        "background": "#faf9f7",
        "secondary-fixed-dim": "#c6c7c4",
        "on-error": "#ffffff",
        "secondary-container": "#e2e3e0",
        "surface-bright": "#faf9f7",
        "primary-fixed-dim": "#b3d355",
        "primary-fixed": "#cfef6e",
        "on-tertiary-fixed-variant": "#4a4737",
        "secondary-fixed": "#e2e3e0",
        "surface-container": "#eeeeec",
        "inverse-primary": "#b3d355",
        "on-tertiary-fixed": "#1e1c0f",
        "on-secondary": "#ffffff",
        "surface-variant": "#e2e3e0",
        "tertiary": "#625f4e",
        "on-surface": "#1a1c1b",
        "on-primary": "#ffffff",
        "surface-dim": "#dadad8",
        "error": "#ba1a1a",
        "tertiary-fixed": "#e8e3cd",
        "on-background": "#1a1c1b",
        "tertiary-fixed-dim": "#ccc7b2"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "1.5rem",
        full: "9999px"
      },
      fontFamily: {
        headline: ["var(--font-epilogue)", "sans-serif"],
        display: ["var(--font-epilogue)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        label: ["var(--font-jakarta)", "sans-serif"]
      }
    }
  },
  plugins: [],
};

export default config;
