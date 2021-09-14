/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedClass from "../../types/DocumentedClass";
import DocumentParams from "../../types/DocumentParams";

import Entity from "./Entity";

export default (classData: DocumentedClass, params: DocumentParams) => {
  if (classData.events.length <= 0) return "";

  return `## Events
${classData.events.map(evt => Entity(evt, params)).join("\n")}`;
};
