/**
 * 默认的配置
 */
export const defaultConfig = {
	// 后端地址
	url: '',
	ak: '',
	autoTrack: {
		appLaunch: true,
		appShow: true,
		appHide: true,
		pageShow: true,
		pageLeave: true,
		pageShare: true,
		pageCollect: true,
		pageClickEvent: true,
	},
	environment: 0,
	customParams: {},
	debug: true,
	// 请求超时
	timeout: 5000,
	// 请求延时
	delay: 1000,
	octopus: false,
};
