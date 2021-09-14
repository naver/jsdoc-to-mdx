/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedClass from "../../types/DocumentedClass";
import Identifier from "../../types/Identifier";

import Entity from "./Entity";

export default (classData: DocumentedClass, dataMap: Map<string, Identifier>, locale: string) => {
  if (classData.methods.length <= 0 && classData.static.methods.length <= 0) return "";

  return `## Methods
${classData.static.methods.map(method => Entity(method, dataMap, locale)).join("\n")}
${classData.methods.map(method => Entity(method, dataMap, locale)).join("\n")}`;
};
