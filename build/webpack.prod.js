const path = require('path');

// 打包平台
const platform = process.env.PLATFORM;
// 运行环境
const env = process.env.NODE_ENV;

module.exports = {
	mode: env,
	entry: './src/index.js',
	devtool: env === 'development' ? 'cheap-source-map' : undefined,
	output: {
		library: 'tracker',
		libraryTarget: 'umd',
		filename: `tracker.${platform}.js`,
		path: path.resolve(__dirname, '../dist'),
	},
	resolve: {
		extensions: [`.${platform}.js`, '.js'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'esbuild-loader',
				options: {
					target: 'es2015', // Syntax to compile to (see options below for possible values)
				},
			},
		],
	},
};
