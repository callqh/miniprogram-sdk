# 原生微信小程序埋点 SDK 使用文档

## 主动埋点使用方式

- 在小程序的入口文件`app.js`中引入 SDK

```js
// app.js

// 这里的引入地址需要根据自己项目中的sdk文件位置做调整
const tracker = require('./utils/tracker.wx').default;

// 初始化埋点配置
tracker.init({
	url: 'https://xxxx.com', // 埋点数据需要发送的后端地址
	ak: 'xxxxxx', // 平台的租户ID，由Dice提供
	debug: true, // 默认开启，开发环境下打印埋点信息
});

App({
	onLaunch() {},
});
```

- 主动采集埋点数据

> 埋点 `SDK` 初始化之后，在原生小程序中可以通过`getApp()`方法获取到`app` 来进行埋点方法的调用。
> 也可以通过 `import { $ta } from '../utils/tracker.js'` 这种方式来进行主动埋点

参数：

> 具体可查看`TA.JS`协议相关的指标监控项

- type: 上报的事件类型
- data: 对应上报类型的数据

```js
// index.js

Page({
	data: {},
	// 事件处理函数
	bindViewTap() {
		// 主动埋点
		getApp().$ta.track({
			tp: Date.now(),
			dt: 'page title',
			dr: 'http://xxxx.com/index',
			// ... ...
		});
	},
	onLoad() {},
});
```

## 登录（更新 uid）

默认的`uid`为`0`，表示为匿名用户，当用户登录时可以更新 `uid`

```js
// 用户登录后，更新uid
getApp().$ta.login('123');
```

## 自动埋点

自动埋点的引入方式和主动埋点一致，这里不再赘述。

只不过自动埋点可以控制需要主动采集哪些数据，对应配置如下

```js
// 这里的引入地址需要根据自己项目中的sdk文件位置做调整
const tracker = require('./utils/tracker.wx').default;

// 初始化埋点配置
tracker.init({
	url: 'https://xxxx.com', // 埋点数据需要发送的后端地址
	ak: 'xxxxxx', // 平台的租户ID，由Dice提供
	debug: true, // 默认开启，开发环境下打印埋点信息
	autoTrack: {
		appLaunch: true, // 小程序启动
		appShow: true, // 小程序从后台切换到前台时触发的事件
		appHide: true, // 小程序从前台切换到后天时触发的事件
		pageShow: true, // 当前页面展示时触发的事件
		pageLeave: true, // 离开当前页面时触发的事件
		pageShare: true, // 点击分享时触发的事件
		pageClickEvent: true, // 页面中点击事件
	},
});
```

如果不想收集某部分的数据，可以将`true`改为`false`。

## 添加公参

公参是由用户自定义传入的，在每次数据发送的时候都会进行携带。

```js
tracker.init({
	url: 'https://xxxx.com', // 埋点数据需要发送的后端地址
	ak: 'xxxxxx', // 平台的租户ID，由Dice提供
	debug: true, // 默认开启，开发环境下打印埋点信息
	// 携带公参
	customParams: {
		appName: 'xxx小程序',
	},
});
```
