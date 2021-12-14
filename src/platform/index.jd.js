// 缓存
export const platformStorage = {
	get(key) {
		return jd.getStorageSync(key);
	},
	set(key, data) {
		return jd.setStorageSync(key, data);
	},
	remove(key) {
		return jd.removeStorageSync(key);
	},
};

// 获取appid
export const getAppId = () => {
	const info = jd.getAccountInfoSync();
	if (info && info.miniProgram) {
		return info.miniProgram.appId;
	}
};

export default {
	...jd,
	storage: platformStorage,
	getAppId,
};
