interface Config {
  outDir: string;
  locales: string[];
  localesDir: string;
  sidebar: string | null;
  jsdoc: string | null;
  bulma: boolean;
}

export default Config;
