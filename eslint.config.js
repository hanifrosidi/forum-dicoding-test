import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import daStyle from "eslint-config-dicodingacademy";

export default defineConfig([
  // 1️⃣ Ignore folder
  {
    ignores: ["src/components/ui/**"],
  },

  // 2️⃣ Base JS recommended config
  js.configs.recommended,

  // 3️⃣ React recommended config
  // pluginReact.configs.flat.recommended,

  // 4️⃣ Dicoding style
  daStyle,

  // 5️⃣ Your overrides (MUST BE LAST)
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest", // modern JS
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // ✅ allow JSX
        },
      },
      globals: { ...globals.browser, ...globals.node, React: "readonly" },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": "off",

      quotes: ["error", "double"],
    },
  },
]);
