/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDir = path.join(__dirname, 'cache/dll');

module.exports = {
  entry: {
    vendor: ['react', '@hot-loader/react-dom']
  },
  output: {
    path: outputDir,
    filename: '[name]-[hash].dll.js',
    library: '[name]_[hash]'
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(outputDir, '[name]-manifest.json'),
      name: '[name]_[hash]'
    })
  ]
};
