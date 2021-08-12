import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import banner2 from 'rollup-plugin-banner2'

export default {
  input: "src/generate.ts",
  output: {
    file: "bin/generate.js",
    format: "cjs",
    name: "jsdoc-to-mdx"
  },
  plugins: [typescript(), resolve(), commonjs(), banner2(() => "#!/usr/bin/env node\n")]
}

