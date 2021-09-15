interface Config {
  outDir: string;
  locales: string[];
  localesDir: string;
  sidebar: string | null;
  prefix: string;
  jsdoc: string | null;
  bulma: boolean;
}

export default Config;
