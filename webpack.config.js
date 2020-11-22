const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            outputPath: 'img/',
            limit: 8192,
          },
        },
      ]},
      {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
      },
      {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      ]},
    ],
  },
};