/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedInterface from "../types/DocumentedInterface";
import Identifier from "../types/Identifier";

import Import from "./partials/Import";
import Entity from "./partials/Entity";

export default (data: DocumentedInterface, dataMap: Map<string, Identifier>, locale: string = "en"): string => `---
custom_edit_url: null
---

${Import()}

\`\`\`ts
interface ${data.name}
\`\`\`

${Entity(data, dataMap, locale)}
`.replace(/\n{3,}/gm, "\n\n");
