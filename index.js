module.exports = {
  plugins: ["stylelint-scss"],
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  ignoreFiles: "**/*.js",
  rules: {
    "scss/at-import-no-partial-leading-underscore": null,
    "scss/no-global-function-names": null,
    "at-rule-no-unknown": null,
    "max-line-length": null,
    "value-keyword-case": null,
    "no-descending-specificity": null,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "alpha-value-notation": null,
    "prettier/prettier": [
      true,
      {
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        singleQuote: false,
        trailingComma: "none",
        bracketSameLine: false,
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.scss", "**/*.css"],
      customSyntax: "postcss-scss",
    },
  ],
};
