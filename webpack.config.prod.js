const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const htmlWebPackPluginConfig = new htmlWebPackPlugin({
  template: './index.html',
  filename: './index.html',
  inject: 'body'
});

module.exports = {
  //babel-polyfill allows use of features such as generators and async and
  //await
  context: __dirname + '/src', //root of project
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000 }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  //To run dev server
  devServer: {
    contentbase: __dirname + '/src'
  },
  plugins: [
    htmlWebPackPluginConfig,
    // minify everything
    new webpack.optimize.UglifyJsPlugin(),

    // merge chunks
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
