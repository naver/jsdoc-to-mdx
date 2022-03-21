import typescript from "rollup-plugin-typescript2";
import banner2 from 'rollup-plugin-banner2'

import packageFile from "./package.json";

export default {
  input: "src/generate.ts",
  output: {
    file: "bin/generate.js",
    format: "cjs",
    name: "jsdoc-to-mdx"
  },
  plugins: [typescript(), banner2(() => "#!/usr/bin/env node\n")],
  external: [...Object.keys(packageFile.dependencies), "jsdoc-parse"]
}

