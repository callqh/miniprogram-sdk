import platform from '../src/platform';
import store from '../src/store';
import pkg from '../package.json';
// 埋点sdk的版本号
const libVersion = pkg.version;
/**
 * 获取用户信息
 */
export const getUserInfo = cb =>
	platform.getUserInfo({
		success(res) {
			store.set('userInfo', res);
			cb && cb(res);
		},
	});

/**
 * 生成用户本次访问的uuid
 * @returns uuid
 */
export const getUUID = function () {
	return (
		'' +
		Date.now() +
		'_' +
		Math.floor(1e7 * Math.random()) +
		'_' +
		Math.random().toString(16).replace('.', '') +
		'_' +
		String(Math.random() * 31242)
			.replace('.', '')
			.slice(0, 8)
	);
};

export const getLaunchOptionsSync = () => platform.getLaunchOptionsSync();
/**
 * 获取appId
 */

/**
 * 获取网络状态
 * @param {*} cb 回调函数
 */
export const getNetworkType = async cb => {
	const res = await platform.getNetworkType();
	if (res) {
		cb && cb(res.networkType.toUpperCase());
	}
};

/**
 * 获取用户系统信息
 * @param {*} callback 回调函数
 */
export function getCommonParam(callback) {
	// 公参
	let common_params;
	getNetworkType(access =>
		platform.getSystemInfo({
			success(res) {
				const system = res.system.split(' ');
				if (res) {
					common_params = {
						distinctId: getUUID(),
						appPlatform: 'MP',
						access,
						lib: 'js',
						libVersion,
						libMethod: '全埋点',
						brand: res.brand,
						model: res.model,
						system: system[0],
						systemVersion: system[1],
						screenResolution: `${res.screenWidth}*${res.screenHeight}`,
						platformVersion: res.version,
						platformLanguage: res.language,
					};
				}
			},
			complete() {
				callback && callback(common_params); // 执行回调
			},
		})
	);
}
