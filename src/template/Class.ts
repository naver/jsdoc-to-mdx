/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedClass from "../types/DocumentedClass";
import { showExtends, showImplements, showInternalWarning } from "../utils";

import Import from "./partials/Import";
import ClassSummary from "./partials/ClassSummary";
import ClassConstructor from "./partials/ClassConstructor";
import ClassProperties from "./partials/ClassProperties";
import ClassMethods from "./partials/ClassMethods";
import ClassEvents from "./partials/ClassEvents";
import DocumentParams from "../types/DocumentParams";
import Entity from "./partials/Entity";

export default (classData: DocumentedClass, params: DocumentParams): string => `---
custom_edit_url: null
---

${Import()}

${showInternalWarning(classData)}

\`\`\`ts
class ${classData.name}${showExtends(classData)}${showImplements(classData)}
\`\`\`
${Entity(classData, params, true)}

${ClassSummary(classData, params)}

${ClassConstructor(classData, params)}

${ClassProperties(classData, params)}
${ClassMethods(classData, params)}
${ClassEvents(classData, params)}
`.replace(/\n{3,}/gm, "\n\n");
