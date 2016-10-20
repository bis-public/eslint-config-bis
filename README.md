# BIS ESLint Config

## Install

```bash
npm install --save-dev eslint-config-bis
```

## Usage

Add this to your `.eslintrc` file:

```json
{
  "extends": "bis"
}
```

The `eslint-config-` prefix is automatically assumed by ESLint.

You can override settings from the shareable config by adding them directly into your `.eslintrc` file. It is up to the individual project to set appropriate ESLint environments (e.g. `node`, `browser`, etc).
