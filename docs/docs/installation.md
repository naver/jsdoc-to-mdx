---
title: Installation
id: installation
slug: /installation
---

# Installing & Running the script
```sh
npm i -D jsdoc-to-mdx
# or
yarn add -D jsdoc-to-mdx
```

This will install `jsdoc-to-mdx` in your node_modules binary, so you can execute it like:

```sh
npx jsdoc-to-mdx -c config.json
```

Or, you can execute in "scripts" in package.json

```json
"scripts": {
  "docs": "jsdoc-to-mdx -c config.json"
}
```

```sh
npm run docs
```
