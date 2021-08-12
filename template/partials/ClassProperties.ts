/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedClass from "../../types/DocumentedClass";
import Identifier from "../../types/Identifier";

import Entity from "./Entity";

export default (classData: DocumentedClass, dataMap: Map<string, Identifier>, locale: string) => {
  if (classData.members.length <= 0 && classData.static.members.length <= 0) return "";

  return `## Properties
${classData.static.members.map(member => Entity(member, dataMap, locale)).join("\n")}
${classData.members.map(member => Entity(member, dataMap, locale)).join("\n")}`;
};
