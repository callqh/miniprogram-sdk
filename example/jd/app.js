// app.js
import t from './utils/tracker.wx';

var sensors = require('./sensorsdata.min.js'); // 配置初始化参数


sensors.setPara({
  name: 'sensors',
  server_url: 'https://www.baidu.com',
  // 全埋点控制开关
  autoTrack: {
    appLaunch: true,
    // 默认为 true，false 则关闭 $MPLaunch 事件采集
    appShow: true,
    // 默认为 true，false 则关闭 $MPShow 事件采集
    appHide: true,
    // 默认为 true，false 则关闭 $MPHide 事件采集
    pageShow: true,
    // 默认为 true，false 则关闭 $MPViewScreen 事件采集
    pageShare: true,
    // 默认为 true，false 则关闭 $MPShare 事件采集
    mpFavorite: true,
    // 默认为 true，false 则关闭 $MPAddFavorites 事件采集
    pageLeave: true
  }
}); // sensors.init();

t.init();
App({
  onLaunch(options) {
    // 展示本地存储能力
    const logs = jd.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    jd.setStorageSync('logs', logs); // 登录

    jd.login({
      success: res => {// 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
  },

  onError(err) {},

  onLaunch() {
    console.log('app launch');
  },

  globalData: {
    userInfo: null
  }
});