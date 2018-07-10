const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: {
          loader: 'ts-loader'
        },
        exclude:/node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx','.js','.jsx'], // 不能少了 .js
  },
  devServer: {

  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'./index.html'
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer:false
    }),
    new DashboardPlugin()
  ],
};