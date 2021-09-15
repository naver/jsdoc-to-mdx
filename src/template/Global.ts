/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import Identifier from "../types/Identifier";
import DocumentParams from "../types/DocumentParams";
import { showFunctionParams } from "../utils";

import Import from "./partials/Import";
import Entity from "./partials/Entity";

export default (data: Identifier, params: DocumentParams): string => `---
custom_edit_url: null
---

${Import()}

\`\`\`ts
${data.kind} ${data.name}${showFunctionParams(data, params)}
\`\`\`

${Entity(data, params, true)}
`.replace(/\n{3,}/gm, "\n\n");
