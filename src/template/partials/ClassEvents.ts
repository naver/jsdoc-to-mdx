/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedClass from "../../types/DocumentedClass";
import Identifier from "../../types/Identifier";

import Entity from "./Entity";

export default (classData: DocumentedClass, dataMap: Map<string, Identifier>, locale: string) => {
  if (classData.events.length <= 0) return "";

  return `## Events
${classData.events.map(evt => Entity(evt, dataMap, locale)).join("\n")}`;
};
