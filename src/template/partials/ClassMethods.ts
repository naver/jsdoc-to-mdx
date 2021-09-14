/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedClass from "../../types/DocumentedClass";
import DocumentParams from "../../types/DocumentParams";

import Entity from "./Entity";

export default (classData: DocumentedClass, params: DocumentParams) => {
  if (classData.methods.length <= 0 && classData.static.methods.length <= 0) return "";

  return `## Methods
${classData.static.methods.map(method => Entity(method, params)).join("\n")}
${classData.methods.map(method => Entity(method, params)).join("\n")}`;
};
