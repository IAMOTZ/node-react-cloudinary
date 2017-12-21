const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, '/client/app.jsx'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
};
