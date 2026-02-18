import js from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
      "no-cond-assign": "error",
      "no-constant-condition": "warn",
      "no-unreachable": "error",
      "no-duplicate-case": "error",
      "no-empty": "warn",
      "no-func-assign": "error",
      "no-irregular-whitespace": "error",

      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "warn",
      "no-console": "warn",
      curly: "error",
      "no-shadow": "warn",
      "no-useless-catch": "warn",
    },
  },
]);
