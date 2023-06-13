# jsdoc-to-mdx

jsdoc to mdx API document generator.

This module is designed for use with [docusaurus v2](https://docusaurus.io/)

## Options
- "-c, --config <path>", "path to the config file"
- "-o, --outDir <path>", "path to the generated mdx files"
- "-l, --locales [locales...]", "locales to enable"
- "-d, --localesDir <path>", "path to the locales document"
- "-p, --prefix <prefix>", "path prefix of the sidebar items. Should end with '/', default is \"api/\""
- "-j, --jsdoc <path>", "path to the jsdoc config"
- "-b, --bulma", "use Bulma's classes instead of Infima"

## Config example
```json
{
  "$schema": "./jsdoc-to-mdx.schema.json",
  "locales": ["ko"],
  "outDir": "./docs/docs/api",
  "localesDir": "./docs/i18n/{locale}/docusaurus-plugin-content-docs/current/api",
  "prefix": "api/",
  "jsdoc": "./jsdoc.json",
  "subDirs": {
    "class": "Class",
    "interface": "Interface",
    "namespace": "Namespace",
    "constant": "Constant",
    "typedef": "Typedef",
    "global": "Global"
  }
}
```
