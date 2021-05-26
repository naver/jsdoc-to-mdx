/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import Identifier from "../types/Identifier";
import { getDescription, inlineLink, showProperties } from "../src/utils";

import Import from "./partials/Import";

export default (constantData: Identifier, dataMap: Map<string, Identifier>, locale: string = "en"): string => `---
custom_edit_url: null
---

${Import()}

${constantData.longname, inlineLink(getDescription(constantData, locale))}

${showProperties(constantData.properties, dataMap, locale)}
`.replace(/\n{3,}/gm, "\n\n");
