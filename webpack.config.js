// webpack.config.js

var path = require("path");

module.exports = {
  entry: "./foo.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foo.bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};
