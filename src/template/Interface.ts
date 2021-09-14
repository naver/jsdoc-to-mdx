/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedInterface from "../types/DocumentedInterface";
import DocumentParams from "../types/DocumentParams";

import Import from "./partials/Import";
import Entity from "./partials/Entity";

export default (data: DocumentedInterface, params: DocumentParams): string => `---
custom_edit_url: null
---

${Import()}

\`\`\`ts
interface ${data.name}
\`\`\`

${Entity(data, params, true)}
`.replace(/\n{3,}/gm, "\n\n");
