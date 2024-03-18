module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	ignorePatterns: [
		"dist",
		".eslintrc.js",
		"babel.config.js",
		"docusaurus.config.ts",
		"tailwind.config.js",
		"tsconfig.json",
	],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	rules: {
		"no-unused-vars": "off",
		"no-console": "warn",
		semi: "error",
		"@typescript-eslint/no-var-requires": "off",
	},
};
