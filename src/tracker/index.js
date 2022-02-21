import {
	appLaunch,
	appShow,
	appHide,
	appError,
	pageShow,
	pageHide,
	pageUnLoad,
	pageShare,
	pageClickEvent,
	shareTimeLine,
	addToFavorites,
} from './hooks';
import reporter from '../reporter';
import store from '../store';
import { getUUID, storage } from '../utils';
// page的原始声明周期集合
const PAGE_LIFE_METHOD = [
	'onLoad',
	'onShow',
	'onReady',
	'onHide',
	'onUnload',
	'onPullDownRefresh',
	'onReachBottom',
	'onShareAppMessage',
	'onShareTimeline',
	'onAddToFavorites',
	'onPageScroll',
	'onResize',
	'onTabItemTap',
	'onSaveExitState',
];

class Tracker {
	constructor() {
		this._collector = {
			App,
			Page,
		};
		this._trackInit();
	}

	init(config) {
		// 生成用户uuid
		if (!storage.get('cid')) {
			storage.set('cid', getUUID());
		}
		// 初始化用户自定义配置
		if (config !== undefined) store.set('config', config);
		store.set('pageShowTime', Date.now());
		// 重写App方法
		App = options => this._collector.App(this._proxyAppOptions(options));
		// 重写Page方法
		Page = options => this._collector.Page(this._proxyPageOptions(options));
	}

	/**
	 * 重写App中的options参数
	 * @param {*} options 原始的options参数
	 * @returns 新的options参数
	 */
	_proxyAppOptions(options) {
		const autoTrack = store.get('config').autoTrack;
		// 向App中注入手动埋点的方法
		options.$ta = {
			track: reporter.track.bind(reporter),
			login: uid => this.login(uid),
		};

		// onLaunch 事件监听
		if (autoTrack.appLaunch) {
			options.onLaunch = appLaunch(options.onLaunch);
		}
		// 前后台切换
		if (autoTrack.appShow) {
			options.onShow = appShow(options.onShow);
		}
		// onHide 事件监听
		if (autoTrack.appHide) {
			options.onHide = appHide(options.onHide);
		}

		options.onError = appError(options.onError);
		return options;
	}

	/**
	 * 重写Page中的options参数
	 * @param {*} options 原始的options参数
	 * @returns 新的options参数
	 */
	_proxyPageOptions(options) {
		const autoTrack = store.get('config').autoTrack;

		// 处理生命周期
		if (autoTrack.pageShow) {
			options.onShow = pageShow(options.onShow);
		}
		if (autoTrack.pageLeave) {
			options.onHide = pageHide(options.onHide);
			options.onUnload = pageUnLoad(options.onUnLoad);
		}

		if (autoTrack.pageShare) {
			options.onShareAppMessage = pageShare(options.onShareAppMessage);
			options.onShareTimeLine = shareTimeLine(options.onShareTimeline);
		}

		if (autoTrack.pageClickEvent) {
			if (store.get('config').octopus) {
				options.eh = pageClickEvent(options.eh);
			} else {
				// 点击事件监听
				for (let prop in options) {
					// 需要保证是函数，并且不是原生的生命周期函数
					if (typeof options[prop] === 'function' && !PAGE_LIFE_METHOD.includes(prop)) {
						// 重写options身上的自定义方法
						options[prop] = pageClickEvent(options[prop]);
					}
				}
			}
		}

		if (autoTrack.pageCollect) {
			options.onAddToFavorites = addToFavorites(options.onAddToFavorites);
		}
		return options;
	}

	/**
	 * 用户登录后更新uid
	 * @param {*} uid
	 */
	login(uid) {
		storage.set('uid', uid);
	}

	/**
	 * 内部的init方法，主要是为了生成一些公共的信息
	 */
	_trackInit() {}
}

export default new Tracker();
