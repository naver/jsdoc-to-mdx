/*
 * Copyright (c) 2021 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import DocumentedClass from "../../types/DocumentedClass";
import DocumentParams from "../../types/DocumentParams";
import { hashLink } from "../../utils";

export default (classData: DocumentedClass, params: DocumentParams) => {
  const entries: string[] = [];
  const values: string[][] = [];

  if (classData.members.length > 0 || classData.static.members.length > 0) {
    entries.push("Properties");
    values.push([
      ...classData.static.members.map(identifier => `${hashLink(identifier.name, identifier.name)}<span className="${params.config.bulma ? "bulma-tag is-info ml-2" : "badge badge--info margin-left--sm"}">static</span>`),
      ...classData.members.map(identifier => `${hashLink(identifier.name, identifier.name)}`)
    ]);
  }
  if (classData.methods.length > 0 || classData.static.methods.length > 0) {
    entries.push("Methods");
    values.push([
      ...classData.static.methods.map(identifier => `${hashLink(identifier.name, identifier.name)}<span className="${params.config.bulma ? "bulma-tag is-info ml-2" : "badge badge--info margin-left--sm"}">static</span>`),
      ...classData.methods.map(identifier => `${hashLink(identifier.name, identifier.name)}`)
    ]);
  }
  if (classData.events.length > 0) {
    entries.push("Events");
    values.push([
      ...classData.events.map(identifier => `${hashLink(identifier.name, `event-${identifier.name}`)}`)
    ]);
  }

  if (entries.length <= 0) return "";

  return `<div className="container">
  <div className="row mb-2">${entries.map(entry => `<div className="col col--${12 / entries.length}"><strong>${entry}</strong></div>`).join("")}</div>
  <div className="row">${values.map(val => `<div className="col col--${12 / entries.length}">${val.join("<br/>")}</div>`).join("")}</div>
</div>`;
};
