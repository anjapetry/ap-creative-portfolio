// Flat ESLint configuration for Next.js (app router)
// Uses the Next.js provided flat config when available.
try {
  // eslint-config-next may export a flat config directly
  module.exports = [require("eslint-config-next")];
} catch (e) {
  // Fallback basic flat configuration
  module.exports = [
    {
      ignores: ["node_modules/**", ".next/**"],
    },
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      languageOptions: {
        ecmaVersion: 2024,
        sourceType: "module",
        parserOptions: {
          project: "./tsconfig.json",
          tsconfigRootDir: __dirname,
        },
      },
      rules: {},
    },
  ];
}
