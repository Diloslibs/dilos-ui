const TerserPlugin = require('terser-webpack-plugin');

const path = require('path');

module.exports = {
  stats: 'minimal',
  entry: {
    'index': './src/index.ts',
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
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
}