/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import Identifier from "./Identifier";

interface DocumentedInterface extends Identifier {
  properties: Required<Identifier["properties"]>;
}

export default DocumentedInterface;
