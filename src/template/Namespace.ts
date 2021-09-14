/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedNamespace from "../types/DocumentedNamespace";
import Identifier from "../types/Identifier";
import { inlineLink } from "../utils";

import Import from "./partials/Import";
import Entity from "./partials/Entity";

export default (data: DocumentedNamespace, dataMap: Map<string, Identifier>, locale: string = "en"): string => `---
custom_edit_url: null
---

${Import()}

\`\`\`ts
namespace ${data.name}
\`\`\`

${inlineLink(data.description)}

## Members
${data.members.map(member => Entity(member, dataMap, locale)).join("\n")}
`.replace(/\n{3,}/gm, "\n\n");
