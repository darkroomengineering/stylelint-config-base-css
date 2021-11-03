module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  ignoreFiles: "**/*.js",
  rules: {
    "scss/at-import-no-partial-leading-underscore": null,
    "scss/no-global-function-names": null,
    "at-rule-no-unknown": null,
    "max-line-length": null,
    "value-keyword-case": null,
    "no-descending-specificity": null,
    "plugin/no-low-performance-animation-properties": true,
    "prettier/prettier": [
      true,
      {
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        singleQuote: false,
        trailingComma: "none",
        bracketSameLine: false,
        semi: false,
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
