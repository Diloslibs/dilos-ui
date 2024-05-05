const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  watch: true,
  stats: 'minimal',
  entry: {
    'index': './src/index.ts',
  },
  output: {
    filename: '[name].js',
    library: { type: 'umd' },
    path: path.resolve(__dirname, '../playground-react/build/'),
  },
  module: {
    rules: [
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