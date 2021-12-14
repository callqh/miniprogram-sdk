import { api, data, components } from './data.js';
import tracker from './utils/tracker.bytedance'
tracker.init()
App({
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
  globalData: {
    imageUrl: 'https://sf3-ttcdn-tos.pstatp.com/obj/developer/ide/demo/',
    api, data, components
  }
});