// app.js
import t from './utils/tracker.wx';
import config from './utils/config'
t.init(config);

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
