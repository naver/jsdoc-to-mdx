---
title: Config
id: config
slug: /config
---

Configs can be provided either by command line parameters or config file with JSON format.

## Sample config.json
```json title=config.json
{
  "locales": ["ko"],
  "outDir": "./docs/docs/api",
  "localesDir": "./docs/i18n/{locale}/docusaurus-plugin-content-docs/current/api",
  "jsdoc": "./jsdoc.json",
  "bulma": false,
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

## Sample shell script
```sh
npx jsdoc-to-mdx -o "docs/api" -s "docs" -j "jsdoc.json"
```

## Sample shell script (when using the config file)
```sh
npx jsdoc-to-mdx -c config.json
```

## locales
- type: string[]
- `-l, --locales`

An array of locale strings to enable.
This will separate all descriptions inside jsdoc that starts with `@"TARGET_LOCALE"` and `<TARGET_LOCALE></TARGET_LOCALE>` then save them where it specified on the `localesDir`

> JSDoc Example)
```js
/**
 * Class Property A
 * @ko 클래스 프로퍼티 A
 * @type {string}
 * @readonly
 * @example
 * ```ts
 * new DummyClass("b").propA === "b";
 * ```
 */
/**
 * Method A
 * @param {number} a description of param a<ko>패러미터 A의 설명</ko>
 * @param {string} [b="DUMMY_TEXT"] description of param b<ko>패러미터 B의 설명</ko>
 */
```

## outDir
- type: string
- `-o, --outDir`

Path to generate mdx files.

## localesDir
- type: string
- `-d, --localesDir`

Path to generate mdx files with locales applied.
If the locale name should be applied to the path name, you can include the special string `{locale}` then it will automatically transform into the target locale name.

## prefix
- type: string
- `-p, --prefix`

Path prefix of the generated sidebar items.
Should end with `/`, and default is `api/`.

## jsdoc
- type: string
- `-j, --jsdoc`

Path to the jsdoc config file.

## bulma
- type: boolean
- `-b, --bulma`

If enabled, generated documents will have [Bulma](https://bulma.io/)'s classes instead of [Infima](https://infima.dev/)'s.
Additional SCSS file to load Bulma's CSS is required.
- See: https://github.com/naver/egjs-flicking/blob/master/docs/src/css/bulma-override.sass

## subDirs
- type: object
- `shell script arguments not supported`

If provided, defined documentation types will be placed in respective subdirectories of `outDir` and `localesDir`.
Example:
```json title=config.json
{
  "outDir": "./docs/docs/api",
  "subDirs": {
    "class": "Class", // classes will be written to `./docs/docs/api/Class`
    "interface": "Interface", // interfaces will be written to `./docs/docs/api/Interface`
    "namespace": "Namespace", // namespaces will be written to `./docs/docs/api/Namespace`
    "constant": "Constant", // constants will be written to `./docs/docs/api/Constant`
    "typedef": "Typedef", // typedefs will be written to `./docs/docs/api/Typedef`
    "global": "Global" // globals will be written to `./docs/docs/api/Global`
  }
}
```
