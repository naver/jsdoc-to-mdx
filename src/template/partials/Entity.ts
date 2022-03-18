/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentParams from "../../types/DocumentParams";
import Identifier from "../../types/Identifier";
import { getDescription, inlineLink, showDefault, showEmit, showExample, showInternalWarning, showParameters, showProperties, showReturn, showSee, showTags, showThrows, showType } from "../../utils";

export default (data: Identifier, params: DocumentParams, foldTitle = false) => `${foldTitle ? "" : `### ${data.name} {#${data.kind === "event" ? `event-${data.name}` : data.name}}`}

${showTags(data, params)}

${inlineLink(getDescription(data, params))}

${showType(data.type, params)}

${showDefault(data.defaultvalue, params)}

${showReturn(data.returns, params)}

${showEmit(data.fires, params)}

${showParameters(data.params, params)}
${showProperties(data.properties, params)}

${showThrows(data.exceptions, params)}
${showSee(data.see, params)}
${showExample(data)}
`;
