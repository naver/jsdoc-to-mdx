/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import Identifier from "../types/Identifier";
import { getDescription, inlineLink, showType } from "../src/utils";

import Import from "./partials/Import";

export default (typedefData: Identifier, dataMap: Map<string, Identifier>, locale: string = "en"): string => `---
custom_edit_url: null
---

${Import()}

${typedefData.longname, inlineLink(getDescription(typedefData, locale))}

${showType(typedefData.type, dataMap)}
`.replace(/\n{3,}/gm, "\n\n");
