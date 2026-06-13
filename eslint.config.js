import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      ".next/**",
      "coverage/**",
      "ios/**/DerivedData/**",
      "android/**/.gradle/**"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended
];
