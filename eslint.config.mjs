import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.js"],
  languageOptions: {
    sourceType: "commonjs",
    globals: globals.browser,
  },
  extends: [
    pluginJs.configs.recommended, // Konfigurasi dari plugin @eslint/js
    daStyle, // Menggunakan style dari 'eslint-config-dicodingacademy'
    // other config styles can be added here if needed
  ],
};
