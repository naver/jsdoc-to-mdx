/* eslint-disable @typescript-eslint/no-var-requires */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/generate.ts",
  output: {
    file: "bin/generate.js",
    format: "cjs",
    name: "jsdoc-to-mdx"
  },
  plugins: [typescript(), resolve(), commonjs()]
}

