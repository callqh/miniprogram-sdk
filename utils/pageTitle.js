// 仅适用于微信标题的获取
export function getPageTitle(route) {
	route = route + '.html';
	try {
		//  判断wxConfig微信内置对象是否存在
		if (__wxConfig) {
			console.log('【 __wxConfig 】==>', __wxConfig);
			const routeConfigList = __wxConfig.page || {};
			console.log('【 routeConfigList[route] 】==>', routeConfigList);

			// 当前页面的所有配置
			const current_page_config = routeConfigList[route].window;
			console.log('【 current_page_config 】==>', current_page_config);
			// 返回当前页面标题
			return current_page_config.navigationBarTitleText;
		}
	} catch (err) {
		// console.warn(err);
	}
}
