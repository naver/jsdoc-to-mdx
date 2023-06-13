import DocumentedClass from './DocumentedClass';
import DocumentedInterface from './DocumentedInterface';
import DocumentedNamespace from './DocumentedNamespace';
import Identifier from './Identifier';

export type Documented = DocumentedClass | DocumentedInterface | DocumentedNamespace | Identifier;

export interface DocumentCollection<T extends Documented> {
  [key: string]: T;
}
