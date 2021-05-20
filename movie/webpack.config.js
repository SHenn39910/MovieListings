const { Module } = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  devServer: {
      contenentBase: path.resolve(__dirname, "./src"),
      historyApiFallback: true
  },
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
    rules: [
      {
        test: "/\.js$/",
        exclude: "/node_modules/",
        use: {
          loader: '@babel-react',
        },
      },
    ],
  },
  plugins: [htmlPlugin],
};
