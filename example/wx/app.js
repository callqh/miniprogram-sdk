// app.js
import t from './utils/tracker.wx';

t.init({
	ak: 'f128205523d8f4c5e9d186a28b171192c',
	url: 'https://tracking-collector-dev.app.terminus.io/collect',
	autoTrack: {
		appLaunch: true,
		appShow: true,
		appHide: true,
		pageShow: true,
		pageLeave: true,
		pageShare: true,
		pageCollect:true,
		pageClickEvent: true,
	},
	// 自定义公参
	customParams: {
		appName: "测试Demo"
	},
	debug: true,
});

App({
	onLaunch(options) {
		// 展示本地存储能力
		const logs = wx.getStorageSync('logs') || [];
		logs.unshift(Date.now());
		wx.setStorageSync('logs', logs);
		wx.getSystemInfo({
			success: (result) => {},
		})
		// 登录
		wx.login({
			success: res => {
				// 用户登录更新openid
				getApp().$ta.login('123456')
				// 发送 res.code 到后台换取 openId, sessionKey, unionId
			},
		});
	},
	globalData: {
		userInfo: null,
	},
});
