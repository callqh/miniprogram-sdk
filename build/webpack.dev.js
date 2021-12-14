const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.prod');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// 打包平台
const platform = process.env.PLATFORM;
// 开发环境下对应的demo地址
const copyFinderList = {
	wx: {
		from: path.resolve(__dirname, `../dist/tracker.${platform}.js`),
		to: path.resolve(__dirname, '../example/wx/utils'),
	},
	alipay: {
		from: path.resolve(__dirname, `../dist/tracker.${platform}.js`),
		to: path.resolve(__dirname, '../example/zfb/utils'),
	},
	dd: {
		from: path.resolve(__dirname, `../dist/tracker.${platform}.js`),
		to: path.resolve(__dirname, '../example/dd/utils'),
	},
	jd: {
		from: path.resolve(__dirname, `../dist/tracker.${platform}.js`),
		to: path.resolve(__dirname, '../example/jd/utils'),
	},
	bd: {
		from: path.resolve(__dirname, `../dist/tracker.${platform}.js`),
		to: '/Users/lqh/swan-projects/program', // 百度
	},
	bytedance: {
		from: path.resolve(__dirname, `../dist/tracker.${platform}.js`),
		to: path.resolve(__dirname, '../example/bytedance/utils'),
	},
};
module.exports = merge(defaultConfig, {
	mode: 'development',
	plugins: [
		// 用于测试的
		new CopyWebpackPlugin({
			patterns: [
				copyFinderList[platform],
				{
					from: path.resolve(__dirname, `../dist/tracker.${platform}.js`),
					to: '/Users/lqh/work/example-octopus/',
				},
			],
		}),
	],
});
