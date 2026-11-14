import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
        ...globals.mocha
      }
    },
    rules: {
      "class-methods-use-this": "off",
      "arrow-parens": "off",
      "prefer-arrow-callback": "off",
      "func-names": "off",
      "object-curly-newline": "off"
    }
  }
]);