/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const publicPath = isDev ? '/' : '/';
const commonPlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
  }),
  new CleanWebpackPlugin()
];
const devPlugins = [
  new BundleAnalyzerPlugin({
    openAnalyzer: false
  })
];
const prodPlugins = [];
const plugins = isDev ? [...commonPlugins, ...devPlugins] : [...commonPlugins, ...prodPlugins];

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    index: ['react-hot-loader/patch', './src/index.tsx']
  },
  output: {
    publicPath
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    publicPath
  },
  devtool: isDev ? 'source-map' : 'none',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // cannot omit .js
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins
};
