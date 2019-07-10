const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/build")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/build"),
    watchContentBase: true,
    port: 9000
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
    }),
    new HtmlWebpackPlugin({
      // injects main.js to our new index.html
      inject: true,
      // copys the content of the existing index.html to the new /build index.html
      template: path.resolve("./dist/index.html")
    })
  ]
};
