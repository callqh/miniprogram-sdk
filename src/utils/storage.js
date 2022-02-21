import platform from '../platform';

const prefix = 'terminus-track-';
/**
 * 缓存相关的方法
 * @returns set、get、remove等方法
 */
export const storage = {
	/**
	 * 设置缓存
	 * @param {*} key 属性名
	 * @param {*} data 数据
	 */
	set: (key, data) => {
		key = prefix + key;
		platform.storage.set(key, data);
	},

	/**
	 * 	获取对应属性的缓存
	 * @param {*} key 属性名
	 * @returns 获取到的缓存值
	 */
	get: key => {
		key = prefix + key;
		return platform.storage.get(key);
	},

	/**
	 * 设置对应缓存
	 * @param {*} key 属性名
	 */
	remove: key => {
		key = prefix + key;
		platform.storage.remove(key);
	},
};
