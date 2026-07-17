/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Dobryi — Deep Cyan palette (professionnelle, sobre)
        nuit: {
          DEFAULT: "#04070F",
          800: "#08111E",
          700: "#0F1B30",
        },
        // Primary accent (aliases to deep cyan)
        cyan: { brand: "#0891B2", light: "#22B8D4", dark: "#0E7490" },
        emerald: { brand: "#0891B2" },
        champagne: { DEFAULT: "#0891B2", light: "#22B8D4", dark: "#0E7490" },
        // Secondary accent (deep navy for tension)
        indigo: { brand: "#1E3A8A" },
        solar: { DEFAULT: "#1E3A8A" },
        violet: { brand: "#1E3A8A" },
        // Sparse eco (not used often)
        eco: { brand: "#0891B2" },
        casse: "#F1F5F9",
        muted2: "#64748B",
      },
      fontFamily: {
        serif: ["'Noto Kufi Arabic'", "system-ui", "sans-serif"],
        sans: ["'Noto Kufi Arabic'", "system-ui", "sans-serif"],
        mono: ["'Noto Kufi Arabic'", "system-ui", "sans-serif"],
        display: ["'Noto Kufi Arabic'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "grain": {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-5%)" },
          "30%": { transform: "translate(3%,-8%)" },
          "50%": { transform: "translate(-4%,4%)" },
          "70%": { transform: "translate(6%,2%)" },
          "90%": { transform: "translate(-3%,6%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "grain": "grain 8s steps(6) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
