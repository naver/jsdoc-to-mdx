import Config from "./Config";
import Identifier from "./Identifier";

interface DocumentParams {
  dataMap: Map<string, Identifier>;
  config: Config;
  locale: string;
}

export default DocumentParams;
