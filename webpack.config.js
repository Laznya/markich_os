const webpack = require('webpack'),
      path = require('path'),
      APP_ROOT = path.resolve(__dirname, "src"),
      DESTINATION = path.resolve(__dirname, "dist");
module.exports = {
  context: APP_ROOT,
  devtool: 'source-map',
  entry: path.resolve('./src', 'index.js'),
  output: {
    path: DESTINATION,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
};
