const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[hash].bundle.js",
    filename: "[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
  },
  plugins: [new CleanWebpackPlugin()],
};
