const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const path = require('path');

module.exports = {
  stats: 'minimal',
  entry: {
    'index': './src/index.ts',
    'accordion': './src/components/accordion/index.ts',
    'dropdown': './src/components/dropdown/index.ts',
  },
  output: {
    filename: '[name].js',
    library: { type: 'umd' },
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      // Improve web debugging experience with source maps.
      { test: /\.ts?$/, enforce: 'pre', use: ['source-map-loader'] },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.css'],
  },
  plugins: [new MiniCssExtractPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
}