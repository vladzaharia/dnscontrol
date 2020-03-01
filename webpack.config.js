const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve("./output"),
        filename: "dnsconfig.js"
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: ["src", "node_modules"].map(x => path.resolve(x)),
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ],
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: "./src/creds.json",
                to: "./creds.json"
            }
        ])
    ]
}