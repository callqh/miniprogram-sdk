import { formatTimestamp, getLaunchOptionsSync } from '../utils';
import $ta from '../reporter';
import store from '../store';
// 上个页面的信息
let lastPageInfo = {
	refPageURL: '',
	refPageTitle: '',
};

const CLICK_EVENT_TYPE = ['tap', 'longtap', 'longpress'];
/** ====================App事件代理======================== */
export const appLaunch = oldOnLunch =>
	_proxyHooks(oldOnLunch, function () {
		const { scene } = getLaunchOptionsSync();
		const data = {
			eventId: 'AppStart',
			pageURL: this.route,
			scene,
			dateTime: formatTimestamp(Date.now()),
		};
		$ta.track(data, '$AppStart');
		// 启动完成将标志重置为true
		store.set('is_launched', true);
	});

export const appShow = oldOnShow =>
	_proxyHooks(oldOnShow, function () {
		const { scene } = getLaunchOptionsSync();
		const is_first_app_show = store.get('first_app_show');
		const is_not_launch = store.get('is_launched');
		const data = {
			eventId: 'AppShow',
			scene,
			pageURL: this.route,
			dateTime: formatTimestamp(Date.now()),
			...store.get('commonParam'),
		};
		// 仅第一次启动时发送该请求，并且该请求不必和launch事件重复发送
		if (!is_first_app_show && is_not_launch) {
			$ta.track(data, '$AppShow');
		}
		store.set('first_app_show', false);
	});

export const appHide = oldOnHide =>
	_proxyHooks(oldOnHide, function () {
		const data = {
			eventId: 'AppHide',
			pageURL: this.route,
			dateTime: formatTimestamp(Date.now()),
		};
		$ta.track(data, '$AppHide');
		// store.set('is_not_launch', true);
	});

export const appError = oldOnError =>
	_proxyHooks(oldOnError, function (err) {
		const data = {
			eventId: 'Error',
			erType: err.type || 1,
			pageURL: this.route,
			erMsg: err,
			dateTime: formatTimestamp(Date.now()),
		};
		$ta.track(data, '$Error');
	});

/** ====================Page事件代理======================== */
/**
 * 代理page的onShow事件
 * @param {*} oldOnShow 原生的onShow事件
 * @returns
 */
export const pageShow = oldOnShow =>
	_proxyHooks(oldOnShow, function () {
		const time = Date.now();
		store.set('pageShowTime', time);
		const { scene, query } = getLaunchOptionsSync();

		const data = {
			eventId: 'Pageview',
			pageURL: this.route,
			launchOptionsSync: scene,
			query: parseQuery(query),
			...lastPageInfo,
			dateTime: formatTimestamp(Date.now()),
		};
		$ta.track(data, '$PageView');
		lastPageInfo = {
			refPageURL: this.route,
		};
	});

/**
 * 代理page的onHide事件
 * @param {*} oldOnHide 原生的onHide事件
 * @returns
 */
export const pageHide = oldOnHide =>
	_proxyHooks(oldOnHide, function () {
		const pageStayTime = _getPageStayTime();
		const data = {
			eventId: 'PageLeave',
			unloadTime: formatTimestamp(Date.now()),
			pageURL: this.route,
			offDuration: pageStayTime,
			dateTime: formatTimestamp(Date.now()),
		};
		store.set('pageShowTime', -1);
		$ta.track(data, '$PageLeave');
	});

/**
 * 代理page的onUnLoad事件
 * @param {*} oldOnUnLoad 原生的onUnLoad事件
 */
export const pageUnLoad = oldOnUnLoad =>
	_proxyHooks(oldOnUnLoad, function () {
		const pageStayTime = _getPageStayTime();
		const data = {
			eventId: 'PageLeave',
			unloadTime: formatTimestamp(Date.now()),
			pageURL: this.route,
			offDuration: pageStayTime,
			dateTime: formatTimestamp(Date.now()),
		};
		store.set('pageShowTime', -1);
		$ta.track(data, '$PageLeave');
	});

/**
 * 代理page的onShareAppMessage事件
 * @param {*} oldShare 原生的onShareAppMessage事件
 */
export const pageShare = function (oldShare) {
	return function () {
		const result = oldShare.apply(this);
		const { scene } = getLaunchOptionsSync();

		const data = {
			eventId: 'Share',
			shareTitle: result.title,
			pageURL: this.route,
			sharePath: this.route,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			shareDepth: scene === 1001 ? 0 : 1,
			dateTime: formatTimestamp(Date.now()),
			shareMethod: '转发消息卡片',
		};
		$ta.track(data, '$Share');
	};
};
/**
 * 转发朋友圈
 * @param {*} oldShare
 * @returns
 */
export const shareTimeLine = function (oldShare) {
	return function () {
		const result = oldShare.apply(this);
		console.log('【 result 】==>', result);
		const { scene } = getLaunchOptionsSync();

		const data = {
			eventId: 'Share',
			shareTitle: result.title,
			pageURL: this.route,
			sharePath: this.route,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			shareDepth: scene === 1001 ? 0 : 1,
			dateTime: formatTimestamp(Date.now()),
			shareMethod: '朋友圈分享',
			...result,
		};
		$ta.track(data, '$Share');
	};
};
/**
 * 收藏
 * @param {*} oldShare
 * @returns
 */
export const addToFavorites = function () {
	return function () {
		const data = {
			eventId: 'Collect',
			pageURL: this.route,
			dateTime: formatTimestamp(Date.now()),
		};
		$ta.track(data, '$Collect');
	};
};
/**
 * 监听页面的点击事件
 * @param {*} oldEvent 原生的page自定义事件
 */
export const pageClickEvent = oldEvent =>
	_proxyHooks(oldEvent, function (e) {
		// let xp;
		// 框架集成的话就获取xpath
		// if (store.get('config').octopus && e) {
		// 	const root = getCurrentPages()[0].data.root;
		// 	xp = getXPath(e.target, root, '/page');
		// }
		// 保证采集的是事件触发元素
		if (e && CLICK_EVENT_TYPE.includes(e.type) && e.target.id === e.currentTarget.id) {
			const data = {
				eventId: 'Click',
				pageURL: this.route,
				elementId: e.currentTarget.id,
				dateTime: formatTimestamp(Date.now()),
				elementLocation: `${e.detail && e.detail.x},${e.detail && e.detail.y}`,
			};
			$ta.track(data, '$Click');
		}
	});

/** ==================== end ======================== */

/**
 * 代理原始方法，并执行回调函数
 * @param {*} fn 需要代理的方法
 * @param {*} cb 需要执行的回调
 */
function _proxyHooks(fn = function () {}, cb) {
	return function () {
		// 执行原函数
		fn.apply(this, arguments);
		// 如果回调存在
		if (cb) {
			cb.apply(this, arguments);
		}
	};
}

/**
 * 获取当前页面停留时间
 * @returns 页面停留时间
 */
function _getPageStayTime() {
	const pageShowTime = store.get('pageShowTime');
	// 记录页面停留时间
	let pageStayTime;
	if (pageShowTime >= 0) {
		pageStayTime = (Date.now() - pageShowTime) / 1000;
	}
	return pageStayTime;
}

/**
 * 获取点击元素的Xpath
 * @param {*} target
 * @param {*} root
 * @returns
 */
// function getXPath(target, root) {
// 	const id = target.id;
// 	let res = '';
// 	const help = (root, path) => {
// 		for (let i = 0; i < root.cn.length; i++) {
// 			let tmp = path + `/${root.cn[i].te}[${i}]`;
// 			if (root.cn[i].id === id) {
// 				res = tmp;
// 				return;
// 			}
// 			help(root.cn[i], tmp);
// 		}
// 	};
// 	help(root, res);
// 	return res;
// }

function parseQuery(query) {
	if (typeof query !== 'object') return '';
	let result = '';
	for (let prop in query) {
		result += `${prop}=${query[prop]}&`;
	}
	return result.slice(0, result.length - 1);
}
