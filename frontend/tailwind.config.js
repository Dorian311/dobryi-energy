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
        // Dobryi — Prism palette
        nuit: {
          DEFAULT: "#05060B",
          800: "#0A0C15",
          700: "#111426",
        },
        // primary accent (kept name emerald-brand for backwards compat — now Cyan électrique)
        emerald: { brand: "#22D3EE" },
        cyan: { brand: "#22D3EE" },
        // secondary CTA accent (kept name solar for backwards compat — now Violet profond)
        solar: { DEFAULT: "#8B5CF6" },
        violet: { brand: "#8B5CF6" },
        eco: { brand: "#34D399" },
        casse: "#F4F4F0",
        muted2: "#8B94B5",
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
