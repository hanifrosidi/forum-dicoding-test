// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import daStyle from "eslint-config-dicodingacademy";
import pluginCypress from "eslint-plugin-cypress";

export default defineConfig([
  // 1️⃣ Ignore folder
  {
    ignores: ["src/components/ui/**"],
  },

  // 2️⃣ Base JS recommended config
  js.configs.recommended,

  // 3️⃣ Dicoding style
  daStyle,

  // 4️⃣ Cypress config
  {
    files: ["cypress/**/*.{js,jsx}"],
    plugins: {
      cypress: pluginCypress,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        cy: "readonly",
        Cypress: "readonly",
      },
    },
    rules: {
      ...pluginCypress.configs.recommended.rules,
    },
  },

  // 5️⃣ Your overrides
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
      },
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
      quotes: "off",
    },
  },

  ...storybook.configs["flat/recommended"],
]);
