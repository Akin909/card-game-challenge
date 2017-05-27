const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebPackPluginConfig = new htmlWebPackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  //babel-polyfill allows use of features such as generators and async and
  //await
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['stage-2'] },
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['stage-0'] },
      },
      { loader: 'url-loader', test: /\\.gif$/ },
      { test: /\.png/, loader: 'file-loader' },
    ],
  },
  plugins: [htmlWebPackPluginConfig],
};
