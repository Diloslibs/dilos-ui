const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  watch: true,
  stats: 'minimal',
  entry: {
    index: './src/npm/index.ts',
    accordion: './src/npm/plugins/accordion/index.ts',
    carousel: './src/npm/plugins/carousel/index.ts',
    collapse: './src/npm/plugins/collapse/index.ts',
    combobox: './src/npm/plugins/combobox/index.ts',
    'copy-markup': './src/npm/plugins/copy-markup/index.ts',
    dropdown: './src/npm/plugins/dropdown/index.ts',
    'input-number': './src/npm/plugins/input-number/index.ts',
    overlay: './src/npm/plugins/overlay/index.ts',
    'pin-input': './src/npm/plugins/pin-input/index.ts',
    'remove-element': './src/npm/plugins/remove-element/index.ts',
    scrollspy: './src/npm/plugins/scrollspy/index.ts', 
    select: './src/npm/plugins/select/index.ts',
    stepper: './src/npm/plugins/stepper/index.ts',
    'strong-password': './src/npm/plugins/strong-password/index.ts',
    tabs: './src/npm/plugins/tabs/index.ts',
    'theme-switch': './src/npm/plugins/theme-switch/index.ts',
    'toggle-count': './src/npm/plugins/toggle-count/index.ts',
    'toggle-password': './src/npm/plugins/toggle-password/index.ts',
    tooltip: './src/npm/plugins/tooltip/index.ts',
  },
  module: {
    rules: [
      { test: /\.ts?$/, enforce: 'pre', use: ['source-map-loader'] },
      { test: /\.ts?$/, use: {
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, '../../ts/npm/tsconfig.json'),
        },
      }, exclude: /node_modules/ },
    ],
  },
  resolve: { extensions: ['.ts', '.js'] },
  output: {
    path: path.resolve(__dirname, '../../../../playground-react/build'),
    filename: '[name].js',
    library: { type: 'umd' },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
