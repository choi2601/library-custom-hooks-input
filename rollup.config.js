import babel from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/bundle.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
  ],
};
