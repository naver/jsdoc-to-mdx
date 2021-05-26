# jsdoc-to-mdx

jsdoc to mdx API document generator.

This module is designed for use with [docusaurus v2](https://docusaurus.io/)

## Options
- "-c, --config <path>", "path to the config file"
- "-o, --outDir <path>", "path to the generated mdx files"
- "-l, --locales [locales...]", "locales to enable"
- "-d, --localesDir <path>", "path to the locales document"
- "-s, --sidebar <path>", "path to the generate sidebar-api.js for Docusaurus v2"
- "-j, --jsdoc", "path to the jsdoc config"

## Config example
```json
{
  "locales": ["ko"],
  "outDir": "docs/api",
  "localesDir": "docs/i18n",
  "sidebar": "docs",
  "jsdoc": "jsdoc.json"
}
```
