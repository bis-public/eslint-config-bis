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

## 2-space Indentation

To ease the process of migrating existing projects to this config, a 2-space indentation override is provided. To use this, add `"bis/2space"` to the extends array after the main config:

```json
{
  "extends": ["bis", "bis/2space"]
}
```
