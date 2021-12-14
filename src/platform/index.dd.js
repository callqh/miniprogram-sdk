export const platformStorage = {
	get(key) {
		const res = dd.getStorageSync({ key });
		return res.data;
	},
	set(key, data) {
		return dd.setStorageSync({
			key,
			data,
		});
	},
	remove(key) {
		return dd.removeStorageSync({
			key,
		});
	},
};

// 获取appid
export const getAppId = () => dd.getAppIdSync();

export default {
	...dd,
	request: dd.httpRequest,
	storage: platformStorage,
};
