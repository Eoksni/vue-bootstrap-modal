/*eslint-env node */
const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: ["./test/test-index.js"],
  output: {
    filename: "test.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      vue$: "vue/dist/vue.esm.js" // required to bundle vue with compiler so it can process templates
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"],
          plugins: ["es6-promise"]
        }
      }
    ]
  }
};
