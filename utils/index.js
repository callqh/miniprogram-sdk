export * from './info';
export { storage } from './storage';
export { getPageTitle } from './pageTitle';
export { logger } from './logger';

/**
 * 合并配置
 * @param {*} origin 原始的配置
 * @param {*} target 目标配置
 */
export const configMerge = (origin, target) => {
	for (let key in target) {
		if (typeof target[key] !== 'object') {
			origin[key] = target[key];
		} else {
			configMerge(origin[key], target[key]);
		}
	}
};
/**
 * 格式化时间戳
 * @param {*} timestamp
 * @returns
 */
export function formatTimestamp(timestamp) {
	var dateObj = new Date(timestamp);

	var year = dateObj.getYear() + 1900;
	var month = dateObj.getMonth() + 1;
	month = month < 10 ? '0' + month : month;
	var theDate = dateObj.getDate();
	theDate = theDate < 10 ? '0' + theDate : theDate;
	var hour = dateObj.getHours();
	hour = hour < 10 ? '0' + hour : hour;
	var minute = dateObj.getMinutes();
	minute = minute < 10 ? '0' + minute : minute;
	var second = dateObj.getSeconds();
	second = second < 10 ? '0' + second : second;
	return year + '-' + month + '-' + theDate + ' ' + hour + ':' + minute + ':' + second;
}
