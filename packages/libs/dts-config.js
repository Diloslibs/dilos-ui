const fs = require('fs');

const pluginsDir = './src/npm/plugins';
const distDir = './build';
const excludePlugins = ['base-plugin'];

const outputConfig = { noBanner: true };

const config = {
	compilationOptions: {
		preferredConfigPath: './tools/ts/npm/tsconfig.json',
	},
	entries: [
		{
			filePath: './src/npm/index.ts',
			outFile: './build/index.d.ts',
			output: outputConfig,
		},
		...fs
			.readdirSync(pluginsDir)
			.map((pluginName) => {
				if (
					!fs.lstatSync(`${pluginsDir}/${pluginName}`).isDirectory() ||
					excludePlugins.includes(pluginName)
				) {
					return null;
				}

				return {
					filePath: `${pluginsDir}/${pluginName}/index.ts`,
					outFile: `${distDir}/${pluginName}.d.ts`,
					output: outputConfig,
				};
			})
			.filter(Boolean),
	],
};

module.exports = config;
