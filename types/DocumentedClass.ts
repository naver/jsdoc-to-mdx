/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import Identifier from "./Identifier";

interface DocumentedClass extends Identifier {
  constructorData?: Identifier;
  static: {
    members: Identifier[];
    methods: Identifier[];
  };
  members: Identifier[];
  methods: Identifier[];
  events: Identifier[];
}

export default DocumentedClass;
