# @studio-freight/stylelint-config-base-css

This package includes the shareable Stylelint configuration used by [Studio Freight](https://github.com/studio-freight) on every website.

## Usage

Install this package:

`npm install --save-dev @studio-freight/stylelint-config-base-css`

or

`yarn add --dev @studio-freight/stylelint-config-base-css`

Then create a file named `.stylelintrc` with following contents in the root folder of your project:

```js
{
  "extends": "@studio-freight/stylelint-config-base-css"
}
```

you're gucci.

## Includes

### [Standard rules](https://github.com/stylelint/stylelint-config-standard)

### [High Performance Animation](https://github.com/kristerkari/stylelint-high-performance-animation)

### Prettier settings:

```js
{
	useTabs:  false,
	tabWidth:  2,
	printWidth:  80,
	singleQuote:  false,
	trailingComma:  "none",
	jsxBracketSameLine:  false,
	semi:  false
}
```

make sure you have the following setting enabled in VSCode:

```js
"editor.codeActionsOnSave": {
	"source.fixAll": true
}
```

since prettier is already included here, you don't need to run any prettifying tools on your end, stylelint already does that for you, you're welcome!
