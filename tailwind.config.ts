// tailwind.config.ts
import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'; // Kaynak projede bu import var

const config: Config = {
  darkMode: "class", // Kaynak projeden
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/themes/**/*.{js,ts,jsx,tsx,mdx}", // src altındaki yollar
  ],
  theme: {
    container: { // Kaynak projeden
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: { // Kaynak projeden
        sans: ["var(--font-family-base)", ...defaultTheme.fontFamily.sans],
      },
      colors: { // Kaynak projeden (HSL değişkenlerinizle)
        border: "hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-200-l) / <alpha-value>)",
        input: "hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-200-l) / <alpha-value>)",
        ring: "hsl(var(--tema-primary-h) var(--tema-primary-s) var(--tema-primary-l) / <alpha-value>)",
        background: "hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-0-l) / <alpha-value>)",
        foreground: "hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-900-l) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--tema-primary-h) var(--tema-primary-s) var(--tema-primary-l) / <alpha-value>)",
          foreground: "hsl(var(--tema-primary-foreground-h) var(--tema-primary-foreground-s) var(--tema-primary-foreground-l) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--tema-secondary-h) var(--tema-secondary-s) var(--tema-secondary-l) / <alpha-value>)",
          foreground: "hsl(var(--tema-secondary-foreground-h) var(--tema-secondary-foreground-s) var(--tema-secondary-foreground-l) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--tema-destructive-h) var(--tema-destructive-s) var(--tema-destructive-l) / <alpha-value>)",
          foreground: "hsl(var(--tema-destructive-foreground-h) var(--tema-destructive-foreground-s) var(--tema-destructive-foreground-l) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-100-l) / <alpha-value>)",
          foreground: "hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-600-l) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--tema-accent-h) var(--tema-accent-s) var(--tema-accent-l) / <alpha-value>)",
          foreground: "hsl(var(--tema-accent-foreground-h) var(--tema-accent-foreground-s) var(--tema-accent-foreground-l) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-0-l) / <alpha-value>)",
          foreground: "hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-900-l) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-0-l) / <alpha-value>)",
          foreground: "hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-900-l) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--tema-success-h) var(--tema-success-s) var(--tema-success-l) / <alpha-value>)",
          foreground: "hsl(var(--tema-success-foreground-h) var(--tema-success-foreground-s) var(--tema-success-foreground-l) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--tema-warning-h) var(--tema-warning-s) var(--tema-warning-l) / <alpha-value>)",
          foreground: "hsl(var(--tema-warning-foreground-h) var(--tema-warning-foreground-s) var(--tema-warning-foreground-l) / <alpha-value>)",
        },
        info: {
          DEFAULT: "hsl(var(--tema-info-h) var(--tema-info-s) var(--tema-info-l) / <alpha-value>)",
          foreground: "hsl(var(--tema-info-foreground-h) var(--tema-info-foreground-s) var(--tema-info-foreground-l) / <alpha-value>)",
        },
        // Sidebar-specific colors from the original Hata Donduren Proje example
        // These might be better managed by the theme system or directly in components
        // but including them here as per "kaynak projenin tailwind.config.ts dosyasındaki tüm theme, extend ve plugins konfigürasyonlarını tamamen ... aktar"
        'sidebar': 'hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-50-l))', // Example: uses neutral-50
        'sidebar-foreground': 'hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-700-l))', // Example: uses neutral-700
        'sidebar-border': 'hsl(var(--tema-neutral-default-h) var(--tema-neutral-default-s) var(--tema-neutral-200-l))', // Example: uses neutral-200
        'sidebar-accent': 'hsl(var(--tema-accent-h) var(--tema-accent-s) var(--tema-accent-l) / 0.1)', // Example: accent with alpha
        'sidebar-accent-foreground': 'hsl(var(--tema-accent-h) var(--tema-accent-s) var(--tema-accent-l))', // Example: solid accent
        'sidebar-ring': 'hsl(var(--tema-primary-h) var(--tema-primary-s) var(--tema-primary-l))', // Example: primary
      },
      borderRadius: { // Kaynak projeden
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xs: "var(--radius-xs)",
        DEFAULT: "var(--radius-md)", // Added default for consistency if needed
      },
      fontSize: { // Kaynak projeden
        xs: "var(--text-xs)", sm: "var(--text-sm)", base: "var(--text-base)",
        lg: "var(--text-lg)", xl: "var(--text-xl)", "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)", "4xl": "var(--text-4xl)", "5xl": "var(--text-5xl)",
      },
      lineHeight: { // Kaynak projeden
        tight: "var(--leading-tight)", snug: "var(--leading-snug)",
        normal: "var(--leading-normal)", relaxed: "var(--leading-relaxed)",
        loose: "var(--leading-loose)",
      },
      boxShadow: { // Kaynak projeden
        sm: "var(--shadow-sm)", md: "var(--shadow-md)", lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)", inner: "var(--shadow-inner)", card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)", sidebar: "var(--shadow-sidebar)",
        dropdown: "var(--shadow-dropdown)",
      },
      keyframes: { // Kaynak projeden
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" }, },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" }, },
        "caret-blink": { "0%,70%,100%": { opacity: "1" }, "20%,50%": { opacity: "0" }, },
        "fade-in": { from: { opacity: "0", transform: "translateY(var(--fade-translate-y, 5px))" }, to: { opacity: "1", transform: "translateY(0)" }, },
        "fade-out": { from: { opacity: "1", transform: "translateY(0)" }, to: { opacity: "0", transform: "translateY(var(--fade-translate-y, 5px))" }, }
      },
      animation: { // Kaynak projeden
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.2s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Kaynak projeden
};
export default config;