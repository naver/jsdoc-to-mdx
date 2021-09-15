/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import Identifier from "../types/Identifier";

export default ({
  classes,
  interfaces,
  namespaces,
  constants,
  typedefs,
  globals
}: {
  classes: Identifier[];
  interfaces: Identifier[];
  namespaces: Identifier[];
  constants: Identifier[];
  typedefs: Identifier[];
  globals: Identifier[];
}, prefix: string) => {
  const sidebar: {[key: string]: any} = {};

  const categories: any[] = [];
  sidebar.api = categories;

  if (classes.length > 0) {
    categories.push({
      type: "category",
      label: "Class",
      items: classes.map(item => `${prefix}${item.name}`)
    });
  }

  if (interfaces.length > 0) {
    categories.push({
      type: "category",
      label: "Interface",
      items: interfaces.map(item => `${prefix}${item.name}`)
    });
  }

  if (namespaces.length > 0) {
    categories.push({
      type: "category",
      label: "Namespace",
      items: namespaces.map(item => `${prefix}${item.name}`)
    });
  }

  if (constants.length > 0) {
    categories.push({
      type: "category",
      label: "Constant",
      items: constants.map(item => `${prefix}${item.name}`)
    });
  }

  if (typedefs.length > 0) {
    categories.push({
      type: "category",
      label: "Typedef",
      items: typedefs.map(item => `${prefix}${item.name}`)
    });
  }

  if (globals.length > 0) {
    categories.push({
      type: "category",
      label: "Global",
      items: globals.map(item => `${prefix}${item.name}`)
    });
  }

  return `module.exports = ${JSON.stringify(sidebar, undefined, 2)};\n`;
};
