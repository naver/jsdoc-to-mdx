type SubDirOptions = "class" | "interface" | "namespace" | "constant" | "typedef" | "global";
export default interface Config {
  outDir: string;
  locales: string[];
  localesDir: string;
  prefix: string;
  jsdoc?: string;
  bulma: boolean;
  subDirs?: { [key in SubDirOptions]: string}
}
