// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

export default tseslint.config(
  {
    ignores: [
      "eslint.config.mjs",
      "next-env.d.ts",
      ".next/",
      "dist/",
      "node_modules/",
      // Shadcn UI tarafından otomatik oluşturulan veya kütüphane dosyaları için
      // "src/components/ui/.shadcn.tsx", // Eğer böyle bir dosya varsa
      "tailwind.config.ts", // Bu dosyalar kendi lint kurallarına sahip olabilir
      "postcss.config.mjs", // .js -> .mjs olarak güncellendi
      "next.config.ts",     // .mjs -> .ts olarak güncellendi
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked, // TypeScript için önerilen kurallar
  ...tseslint.configs.stylisticTypeChecked,  // Stilistik TypeScript kuralları
  {
    files: ["src/**/*.{ts,tsx}"], // Sadece src içindeki dosyalar için linting
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Next.js hem tarayıcı hem de Node.js ortamında çalışabilir
      },
      parserOptions: {
        project: ["./tsconfig.json"], // Projenin kök dizinindeki tsconfig.json'u kullan
        tsconfigRootDir: import.meta.dirname, // eslint.config.js'nin bulunduğu dizin
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "@next/next": nextPlugin,
    },
    settings: {
      next: {
        rootDir: "./", // Projenin kök dizini
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // React Hooks için kurallar
      ...nextPlugin.configs.recommended.rules, // Next.js için önerilen kurallar
      ...nextPlugin.configs["core-web-vitals"].rules, // Core Web Vitals için kurallar
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off", // Fonksiyon dönüş tiplerini zorunlu kılma
      "@typescript-eslint/no-explicit-any": "warn", // 'any' kullanımı için uyar
      "@typescript-eslint/no-misused-promises": [ // Promise'lerin yanlış kullanımı
        "error",
        {
          checksVoidReturn: {
            attributes: false, // React event handler'ları (örn: onClick={async () => ...}) için
          },
        },
      ],
      "@typescript-eslint/consistent-type-imports": "warn", // Tip importlarını tutarlı yap
    },
  },
  {
    // Proje yapılandırma dosyaları için (örn: eslint.config.js, next.config.mjs)
    files: ["*.config.{js,mjs,cjs,ts}"], // .ts eklendi (next.config.ts, tailwind.config.ts)
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    rules: {
      // Bu dosyalarda tip kontrolü gerekmeyebilir
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      // Gerekirse eklenebilecek diğer kurallar:
      // "@typescript-eslint/no-unsafe-assignment": "off",
      // "@typescript-eslint/no-unsafe-call": "off",
      // "@typescript-eslint/no-unsafe-member-access": "off",
    }
  }
);