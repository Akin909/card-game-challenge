const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebPackPluginConfig = new htmlWebPackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
});

  //resolve: {
    //alias: {
      //Game: 'src/components/Game.jsx',
      //GameLogic: 'src/components/GameLogic.js',
    //},
  //},
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
      { loader: 'file-loader', test: /\\.(ttf|eot|svg)$/ },
    ],
  },
  plugins: [htmlWebPackPluginConfig],
};
