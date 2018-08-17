# BIS ESLint Config

## Install

```bash
npm install --save-dev eslint-config-bis
```

## Usage

For ES5 environments, use the `"bis"` config. For newer environments, use the `"bis/es6"` config.

Add this to your `.eslintrc` file:

```json
{
  "extends": "bis" // or "bis/es6"
}
```

The `eslint-config-` prefix is automatically assumed by ESLint.

You can override settings from the shareable config by adding them directly into your `.eslintrc` file. It is up to the individual project to set appropriate ESLint environments (e.g. `node`, `browser`, etc) and parser settings (e.g. `ecmaVersion`).
