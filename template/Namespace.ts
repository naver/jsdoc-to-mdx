/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedNamespace from "../types/DocumentedNamespace";
import Identifier from "../types/Identifier";
import { inlineLink } from "../src/utils";

import Import from "./partials/Import";
import Member from "./partials/Member";

export default (namespaceData: DocumentedNamespace, dataMap: Map<string, Identifier>, locale: string = "en"): string => `---
custom_edit_url: null
---

${Import()}

${inlineLink(namespaceData.description)}

## Members
${namespaceData.members.map(member => Member(member, dataMap, locale)).join("\n")}
`.replace(/\n{3,}/gm, "\n\n");
