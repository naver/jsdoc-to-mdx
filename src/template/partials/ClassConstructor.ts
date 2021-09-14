/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedClass from "../../types/DocumentedClass";
import DocumentParams from "../../types/DocumentParams";
import { showParameters } from "../../utils";

export default (classData: DocumentedClass, params: DocumentParams) => {
  if (!classData.constructorData) return "";

  const constructorData = classData.constructorData;
  const constructorParams = constructorData.params || [];

  return `## Constructor
\`\`\`ts
new ${classData.name}(${constructorParams.map(param => param.name).join(", ")})
\`\`\`
${showParameters(constructorParams, params)}
`;
};
