const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  target: ["node", "es5"],
  entry: "./src/main.ts",
  output: {
    path: path.resolve("./out"),
    filename: "dnsconfig.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["src", "node_modules"].map((x) => path.resolve(x)),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/creds.json", to: "./creds.json" }],
    }),
  ],
  optimization: {
    minimize: false,
  },
};
