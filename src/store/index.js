import { defaultConfig } from './defaultConfig';
import { configMerge } from '../utils';
/**
 * 全局数据存放仓库
 * 现存数据段：
 * @param config 用户自定义配置
 * @param commonParam 公参信息
 * @param networkType 网络状态
 * @param pageShowTime 当前页面的进入时间
 */
class Store {
	constructor() {
		this.store = {
			config: defaultConfig, //	用户配置
			first_app_show: true,
			is_launched: false,
		};
	}
	/**
	 * 设置存储值
	 * @param {*} key 属性名
	 * @param {*} value 值
	 */
	set(key, value) {
		if (key === 'config') {
			// 合并配置
			configMerge(this.store[key], value);
		} else {
			this.store[key] = value;
		}
	}
	/**
	 * 获取对应的值
	 * @param {*} key 属性名
	 * @returns
	 */
	get(key) {
		return this.store[key];
	}
	/**
	 * 删除对应属性名
	 * @param {*} key 属性名
	 */
	del(key) {
		delete this.store[key];
	}
	/**
	 * 清空数据仓库
	 */
	clear() {
		this.store = {};
	}
}

export default new Store();
