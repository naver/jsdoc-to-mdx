/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedInterface from "../types/DocumentedInterface";
import Identifier from "../types/Identifier";
import { getDescription, inlineLink, showProperties } from "../src/utils";

import Import from "./partials/Import";

export default (interfaceData: DocumentedInterface, dataMap: Map<string, Identifier>, locale: string = "en"): string => `---
custom_edit_url: null
---

${Import()}

\`\`\`ts
interface ${interfaceData.name}
\`\`\`

${inlineLink(getDescription(interfaceData, locale))}

${showProperties(interfaceData.properties, dataMap, locale)}
`.replace(/\n{3,}/gm, "\n\n");
