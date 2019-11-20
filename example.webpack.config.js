/*eslint-env node */
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: ["./example/example-index.js"],
  output: {
    filename: "example.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      vue$: "vue/dist/vue.runtime.js"
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'example/example-index.html',
      filename: 'index.html'
    })
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
