// 缓存
export const platformStorage = {
	get(key) {
		return wx.getStorageSync(key);
	},
	set(key, data) {
		return wx.setStorageSync(key, data);
	},
	remove(key) {
		return wx.removeStorageSync(key);
	},
};

// 获取appid
export const getAppId = () => {
	const info = wx.getAccountInfoSync();
	if (info && info.miniProgram) {
		return info.miniProgram.appId;
	}
};

export default {
	...wx,
	storage: platformStorage,
	getAppId,
};
