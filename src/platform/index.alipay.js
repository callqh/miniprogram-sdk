// 缓存
export const platformStorage = {
	get(key) {
		return my.getStorageSync(key);
	},
	set(key, data) {
		return my.setStorageSync(key, data);
	},
	remove(key) {
		return my.removeStorageSync(key);
	},
};

// 获取appid
export const getAppId = () => {
	const info = my.getAccountInfoSync();
	if (info && info.miniProgram) {
		return info.miniProgram.appId;
	}
};

export default {
	...my,
	storage: platformStorage,
	getAppId,
};
