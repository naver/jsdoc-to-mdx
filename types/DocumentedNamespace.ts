/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import Identifier from "./Identifier";

interface DocumentedNamespace extends Identifier {
  members: Identifier[];
}

export default DocumentedNamespace;
