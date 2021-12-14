// 缓存
export const platformStorage = {
	get(key) {
		return swan.getStorageSync(key);
	},
	set(key, data) {
		return swan.setStorageSync(key, data);
	},
	remove(key) {
		return swan.removeStorageSync(key);
	},
};

// 获取appid
export const getAppId = () => swan.getAppIdSync();
export default {
	...swan,
	storage: platformStorage,
	getAppId,
};
