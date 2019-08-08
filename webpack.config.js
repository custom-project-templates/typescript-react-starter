/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

const publicPath = isDev ? '/' : '/';

const commonPlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin()
];
const devPlugins = [
  new BundleAnalyzerPlugin({
    openAnalyzer: false
  }),
  new FriendlyErrorsWebpackPlugin()
];
const prodPlugins = [
  new OptimizeCssAssetsPlugin({
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }]
    }
  })
];
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
    publicPath,
    quiet: true,
    compress: true,
    overlay: true
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules']
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]',
              limit: 1024
            }
          }
        ]
      },
      // import svg file as a react component
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // cannot omit .js
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@images': path.resolve(__dirname, './src/images'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks')
    }
  },
  plugins
};
