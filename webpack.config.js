const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    port: 9000
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ]
};
