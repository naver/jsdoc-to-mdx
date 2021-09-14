/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedClass from "../../types/DocumentedClass";
import DocumentParams from "../../types/DocumentParams";

import Entity from "./Entity";

export default (classData: DocumentedClass, params: DocumentParams) => {
  if (classData.members.length <= 0 && classData.static.members.length <= 0) return "";

  return `## Properties
${classData.static.members.map(member => Entity(member, params)).join("\n")}
${classData.members.map(member => Entity(member, params)).join("\n")}`;
};
