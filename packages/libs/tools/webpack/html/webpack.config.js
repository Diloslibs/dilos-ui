const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: {
    'index': './src/index.ts',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, '../../../dist/'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, '../../ts/html/tsconfig.json'),
          },
        },
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
}