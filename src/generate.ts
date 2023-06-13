/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import path from "path";
import { Command } from "commander";
import child_process from "child_process";
import tmp from "tmp-promise";
import * as fs from "fs-extra";
import jsdocParse from "jsdoc-parse";

import Identifier from "./types/Identifier";
import DocumentedClass from "./types/DocumentedClass";
import DocumentedInterface from "./types/DocumentedInterface";
import DocumentedNamespace from "./types/DocumentedNamespace";
import classTemplate from "./template/Class";
import interfaceTemplate from "./template/Interface";
import namespaceTemplate from "./template/Namespace";
import constantTemplate from "./template/Constant";
import typedefTemplate from "./template/Typedef";
import globalTemplate from "./template/Global";
import { parseLocales } from "./utils";
import Config from "./types/Config";
import DocumentParams from "./types/DocumentParams";
import {DocumentCollection, Documented} from './types/DocumentCollection';

const program = new Command();

program
  .option("-c, --config <path>", "path to the config file")
  .option("-o, --outDir <path>", "path to the generated mdx files")
  .option("-l, --locales [locales...]", "locales to enable")
  .option("-d, --localesDir <path>", "path to the locales document")
  .option("-p, --prefix <prefix>", "path prefix of the sidebar items. Should end with '/', default is \"api/\"")
  .option("-j, --jsdoc <path>", "path to the jsdoc config")
  .option("-b, --bulma", "use Bulma's classes instead of Infima");

program.parse(process.argv);

const options = program.opts();

if (!options.config && !options.outDir) {
  throw new Error("error: required option '-o, --outDir <path>', or '-c, --config <path>' not specified");
}

const inputConfigs = options.config
  ? require(path.resolve(process.cwd(), options.config))
  : { ...options };

const config: Config = {
  locales: [],
  localesDir: `${inputConfigs.outDir}/i18n/{locale}/docusaurus-plugin-content-docs/api`,
  sidebar: null,
  prefix: "api/",
  jsdoc: null,
  ...inputConfigs
};

const {
  outDir,
  locales,
  localesDir,
  jsdoc: jsdocConfig
} = config;

const jsdocArgs = ["@daybrush/jsdoc", "-X", "-r"];

if (jsdocConfig) {
  jsdocArgs.push("-c", jsdocConfig);
}

tmp.withDir(async tempDir => {
  const tempFile = path.resolve(tempDir.path, "jsdoc-to-mdx-ast.json");
  jsdocArgs.push("-d", tempDir.path);

  const jsdocProcess = child_process.fork(require.resolve("@daybrush/jsdoc/jsdoc.js"), jsdocArgs, {
    stdio: "pipe"
  });

  jsdocProcess.stdout!.pipe(fs.createWriteStream(tempFile));

  const donePromise = new Promise<void>((resolve, reject) => {
    jsdocProcess.on("close", () => {
      resolve();
    });

    jsdocProcess.on("error", err => {
      reject(err);
    });
  });

  await donePromise;

  const ast = JSON.parse(fs.readFileSync(tempFile).toString());
  const templateData = jsdocParse(ast) as Identifier[];

  const classes: DocumentCollection<DocumentedClass> = {};
  const interfaces: DocumentCollection<DocumentedInterface> = {};
  const namespaces: DocumentCollection<DocumentedNamespace> = {};
  const constants: DocumentCollection<Identifier> = {};
  const typedefs: DocumentCollection<Identifier> = {};
  const globals: DocumentCollection<Identifier> = {};

  const dataMap = new Map<string, Identifier>();

  const apiDir = path.resolve(process.cwd(), outDir);
  const localeRegex = /{locale}/g;
  const localeAPIDir = (locale: string) => localeRegex.test(localesDir)
    ? path.resolve(process.cwd(), localesDir.replace(localeRegex, locale))
    : path.resolve(process.cwd(), localesDir, locale)

  fs.ensureDirSync(apiDir);
  locales.forEach(locale => {
    fs.ensureDirSync(localeAPIDir(locale));
  });

  templateData.forEach(identifier => {
    dataMap.set(identifier.longname, identifier);

    if (identifier.see) {
      identifier.see = (identifier.see as unknown as string[]).map(val => ({ description: val }));
    }

    Object.keys(identifier).forEach(key => {
      if (typeof identifier[key] === "object" && "description" in identifier[key]) {
        locales.forEach(locale => parseLocales(identifier[key], locale));
      } else if (Array.isArray(identifier[key])) {
        identifier[key].forEach(val => {
          if (typeof val === "object" && "description" in val) {
            locales.forEach(locale => parseLocales(val, locale));
          }
        });
      }
    });
  });

  templateData
    .filter(identifier => !identifier.memberof)
    .forEach(identifier => {
      if (identifier.kind === "class") {
        const classData = identifier as DocumentedClass;
        classData.static = {
          members: [],
          methods: []
        };
        classData.members = [];
        classData.methods = [];
        classData.events = [];

        classes[classData.name] = classData;
      } else if (identifier.kind === "interface") {
        const interfaceData = identifier as DocumentedInterface;

        if (!interfaceData.properties) {
          interfaceData.properties = [];
        }

        interfaces[interfaceData.name] = interfaceData;
      } else if (identifier.kind === "namespace") {
        const namespaceData = identifier as DocumentedNamespace;

        namespaceData.members = [];

        namespaces[identifier.name] = namespaceData;
      } else if (identifier.kind === "constant") {
        constants[identifier.name] = identifier;
      } else if (identifier.kind === "typedef") {
        typedefs[identifier.name] = identifier;
      } else if (identifier.scope === "global") {
        globals[identifier.name] = identifier;
      }

      templateData.splice(templateData.findIndex(val => val === identifier), 1);
    });

  templateData.forEach(identifier => {
    if (!identifier.memberof) return;

    if (classes[identifier.memberof]) {
      const classData = classes[identifier.memberof];

      if (identifier.kind === "constructor") {
        classData.constructorData = identifier;
      } else if (identifier.kind === "event") {
        classData.events.push(identifier);
      } else if (identifier.kind === "member") {
        if (identifier.scope === "static") {
          classData.static.members.push(identifier);
        } else {
          classData.members.push(identifier);
        }
      } else if (identifier.kind === "function") {
        if (identifier.scope === "static") {
          classData.static.methods.push(identifier);
        } else {
          classData.methods.push(identifier);
        }
      } else {
        console.error(identifier.kind, identifier.name, "is not included");
      }
    } else if (namespaces[identifier.memberof]) {
      const namespaceData = namespaces[identifier.memberof];

      namespaceData.members.push(identifier);
    }
  });

  const params: DocumentParams = {
    dataMap,
    config,
    locale: "en"
  }

  Object.keys(classes).forEach(async name => {
    const pathToDir = config.subDirs?.class ? path.resolve(apiDir, config.subDirs.class) : path.resolve(apiDir)
    fs.ensureDirSync(pathToDir)
    await fs.writeFile(
      path.resolve(pathToDir, `${name}.mdx`),
      classTemplate(classes[name], params)
    );

    locales.forEach(async locale => {
      const localeDir = config.subDirs?.class ? path.resolve(localeAPIDir(locale), config.subDirs.class) : path.resolve(localeAPIDir(locale))
      fs.ensureDirSync(localeDir)
      await fs.writeFile(
        path.resolve(localeDir, `${name}.mdx`),
        classTemplate(classes[name], { ...params, locale })
      );
    });
  });

  Object.keys(interfaces).forEach(async name => {
    const pathToDir = config.subDirs?.interface ? path.resolve(apiDir, config.subDirs.interface) : path.resolve(apiDir)
    fs.ensureDirSync(pathToDir)
    await fs.writeFile(
      path.resolve(pathToDir, `${name}.mdx`),
      interfaceTemplate(interfaces[name], params)
    );

    locales.forEach(async locale => {
      const localeDir = config.subDirs?.interface ? path.resolve(localeAPIDir(locale), config.subDirs.interface) : path.resolve(localeAPIDir(locale))
      fs.ensureDirSync(localeDir)
      await fs.writeFile(
        path.resolve(localeDir, `${name}.mdx`),
        interfaceTemplate(interfaces[name], { ...params, locale })
      );
    });
  });

  Object.keys(namespaces).forEach(async name => {
    const pathToDir = config.subDirs?.namespace ? path.resolve(apiDir, config.subDirs.namespace) : path.resolve(apiDir)
    fs.ensureDirSync(pathToDir)
    await fs.writeFile(
      path.resolve(pathToDir, `${name}.mdx`),
      namespaceTemplate(namespaces[name], params)
    );

    locales.forEach(async locale => {
      const localeDir = config.subDirs?.namespace ? path.resolve(localeAPIDir(locale), config.subDirs.namespace) : path.resolve(localeAPIDir(locale))
      fs.ensureDirSync(localeDir)
      await fs.writeFile(
        path.resolve(localeDir, `${name}.mdx`),
        namespaceTemplate(namespaces[name], { ...params, locale })
      );
    });
  });

  Object.keys(constants).forEach(async name => {
    const pathToDir = config.subDirs?.constant ? path.resolve(apiDir, config.subDirs.constant) : path.resolve(apiDir)
    fs.ensureDirSync(pathToDir)
    await fs.writeFile(
      path.resolve(pathToDir, `${name}.mdx`),
      constantTemplate(constants[name], params)
    );

    locales.forEach(async locale => {
      const localeDir = config.subDirs?.constant ? path.resolve(localeAPIDir(locale), config.subDirs.constant) : path.resolve(localeAPIDir(locale))
      fs.ensureDirSync(localeDir)
      await fs.writeFile(
        path.resolve(localeDir, `${name}.mdx`),
        constantTemplate(constants[name], { ...params, locale })
      );
    });
  });

  Object.keys(typedefs).forEach(async name => {
    const pathToDir = config.subDirs?.typedef ? path.resolve(apiDir, config.subDirs.typedef) : path.resolve(apiDir)
    fs.ensureDirSync(pathToDir)
    await fs.writeFile(
      path.resolve(pathToDir, `${name}.mdx`),
      typedefTemplate(typedefs[name], params)
    );

    locales.forEach(async locale => {
      const localeDir = config.subDirs?.typedef ? path.resolve(localeAPIDir(locale), config.subDirs.typedef) : path.resolve(localeAPIDir(locale))
      fs.ensureDirSync(localeDir)
      await fs.writeFile(
        path.resolve(localeDir, `${name}.mdx`),
        typedefTemplate(typedefs[name], { ...params, locale })
      );
    });
  });

  Object.keys(globals).forEach(async name => {
    const pathToDir = config.subDirs?.global ? path.resolve(apiDir, config.subDirs.global) : path.resolve(apiDir)
    fs.ensureDirSync(pathToDir)
    await fs.writeFile(
      path.resolve(pathToDir, `${name}.mdx`),
      globalTemplate(globals[name], params)
    );

    locales.forEach(async locale => {
      const localeDir = config.subDirs?.global ? path.resolve(localeAPIDir(locale), config.subDirs.global) : path.resolve(localeAPIDir(locale))
      fs.ensureDirSync(localeDir)
      await fs.writeFile(
        path.resolve(localeDir, `${name}.mdx`),
        globalTemplate(globals[name], { ...params, locale })
      );
    });
  });
}, { unsafeCleanup: true });
