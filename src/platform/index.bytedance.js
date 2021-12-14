// 缓存
export const platformStorage = {
	get(key) {
		return tt.getStorageSync(key);
	},
	set(key, data) {
		return tt.setStorageSync(key, data);
	},
	remove(key) {
		return tt.removeStorageSync(key);
	},
};

// 获取appid
export const getAppId = () => {
	const info = tt.getEnvInfoSync();
	if (info && info.microapp) {
		return info.microapp.appId;
	}
};

export default {
	...tt,
	storage: platformStorage,
	getAppId,
};
