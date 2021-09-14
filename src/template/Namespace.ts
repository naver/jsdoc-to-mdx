/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedNamespace from "../types/DocumentedNamespace";
import DocumentParams from "../types/DocumentParams";
import { inlineLink } from "../utils";

import Import from "./partials/Import";
import Entity from "./partials/Entity";

export default (data: DocumentedNamespace, params: DocumentParams): string => `---
custom_edit_url: null
---

${Import()}

\`\`\`ts
namespace ${data.name}
\`\`\`

${inlineLink(data.description)}

## Members
${data.members.map(member => Entity(member, params)).join("\n")}
`.replace(/\n{3,}/gm, "\n\n");
