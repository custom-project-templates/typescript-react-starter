const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const outputDir = path.join(__dirname, 'build');
const dllDir = path.join(__dirname, 'cache/dll');
const publicPath = isProd ? '/' : '/';

if (!fs.existsSync(dllDir)) {
  console.log('generating dll...');
  execSync(`${path.resolve('./node_modules/.bin/cross-env')} NODE_ENV=development webpack --config webpack.dll.js`);
  console.log('running webpack...');
}

const commonPlugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new LodashModuleReplacementPlugin
];
const devPlugins = [
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
  }),
  new FriendlyErrorsWebpackPlugin(),
  new webpack.DllReferencePlugin({
    manifest: require(path.resolve(dllDir, 'vendor-manifest.json')),
  }),
  new AddAssetHtmlPlugin({
    filepath: path.resolve(dllDir, '*.dll.js'),
  }),
];
const prodPlugins = [
  new OptimizeCssAssetsPlugin({
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
  }),
];
const plugins = isProd ? [...commonPlugins, ...prodPlugins] : [...commonPlugins, ...devPlugins];

const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: ['react-hot-loader/patch', './src/index.tsx'],
  },
  output: {
    path: outputDir,
    publicPath,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    publicPath,
    quiet: true,
    compress: true,
    overlay: true,
  },
  devtool: isProd ? 'none' : 'source-map',
  optimization: {
    // todo: DLLPlugin is for dev and splitChunks for prod, so add 'if else' here when config splitChunks
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              // cacheDirectory: true
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isProd,
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                includePaths: ['./node_modules'],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]',
              limit: 1024,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'], // let us import svg file as a react component
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // cannot omit .js
    alias: {
      react: path.resolve('./node_modules/react'), // why do so? see this issue(https://github.com/facebook/react/issues/15812) and comment
      'react-dom': '@hot-loader/react-dom',
      '~images': path.resolve(__dirname, './src/images'),
      '~pages': path.resolve(__dirname, './src/pages'),
      '~components': path.resolve(__dirname, './src/components'),
      '~hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  plugins,
};

module.exports = config;
