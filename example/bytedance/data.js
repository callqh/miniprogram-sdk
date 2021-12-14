const data = [
  {
    title: '原生化',
    list: [
      {
        name: '组件',
        icon: '/image/tab-icon/api-icon.png',
        pages: [
          {
            name: '基础视图 view',
            path: 'component/view/view',
          },
          {
            name: '可滚动视图区域 scroll-view',
            path: 'component/scroll-view/scroll-view',
          },
          {
            name: '滑块视图容器 swiper',
            path: 'component/swiper/swiper',
          },
          {
            name: '文本 text',
            path: 'component/text/text',
          },
          {
            name: '图片 image',
            path: 'component/image/image',
          },
        ],
      },
      {
        name: '接口',
        icon: '/image/tab-icon/interface-icon.png',
        pages: [],
      },
    ],
  },
  {
    title: '组件',
  },
  {
    title: '接口',
  },
];
// api
const api = [
  {
    name: '基础',
    open: false,
    icon: '/image/icon/basic-content-icon.png',
    pages: [
      {
        name: 'tt.canIUse',
        path: 'tt-can-i-use/tt-can-i-use',
      },
      {
        name: 'tt.getLaunchOptionsSync',
        path: 'tt-get-launch-options-sync/tt-get-launch-options-sync',
      },
      {
        name: 'tt.exitMiniProgram',
        path: 'tt-exit-mini-program/tt-exit-mini-program',
      },
      {
        name: 'tt.canIPutStuffOverComponent',
        path: 'tt-can-i-put-stuff-over-component/tt-can-i-put-stuff-over-component',
      },
      {
        name: '定时器 setTimeout',
        path: 'setTimeout/setTimeout',
      },
      {
        name: '定时器 setInterval',
        path: 'setInterval/setInterval',
      },
      {
        name: '监听切前台事件 tt.onAppShow',
        path: 'tt-on-app-show/tt-on-app-show',
      },
      {
        name: '取消监听切前台事件 tt.offAppShow',
        path: 'tt-off-app-show/tt-off-app-show',
      },
      {
        name: '监听切后台事件 tt.onAppHide',
        path: 'tt-on-app-hide/tt-on-app-hide',
      },
      {
        name: '取消监听切后台事件 tt.offAppHide',
        path: 'tt-off-app-hide/tt-off-app-hide',
      },
      {
        name: '监听错误事件 tt.onError',
        path: 'tt-on-error/tt-on-error',
      },
      {
        name: '取消监听错误事件 tt.offError',
        path: 'tt-off-error/tt-off-error',
      },
      {
        name: '获取小程序一些环境变量 tt.env',
        path: 'tt-env/tt-env',
      },
      {
        name: '将Base64字符串转成ArrayBuffer对象 tt.base64ToArrayBuffer',
        path: 'tt-base-64-to-array-buffer/tt-base-64-to-array-buffer',
      },
      {
        name: '将ArrayBuffer对象转成Base64字符串 tt.arrayBufferToBase64',
        path: 'tt-array-buffer-to-base-64/tt-array-buffer-to-base-64',
      },
      {
        name: '获取版本更新管理器 tt.getUpdateManager',
        path: 'tt-get-update-manager/tt-get-update-manager',
      },
      {
        name: 'UpdateManager.onCheckForUpdate',
        path: 'updage-manager-onCheckForUpdate/updage-manager-onCheckForUpdate',
      },
      {
        name: 'UpdateManager.onUpdateReady',
        path: 'updage-manager-onUpdateReady/updage-manager-onUpdateReady',
      },
      {
        name: 'UpdateManager.onUpdateFailed',
        path: 'updage-manager-onUpdateFailed/updage-manager-onUpdateFailed',
      },
      {
        name: 'UpdateManager.applyUpdate',
        path: 'updage-manager-applyUpdate/updage-manager-applyUpdate',
      },
    ],
  },
  {
    name: '开放接口',
    open: false,
    icon: '/image/icon/open-interface-icon.png',
    pages: [
      {
        name: '登录 tt.login',
        path: 'tt-login/tt-login',
      },
      {
        name: '检查当前登录态 tt.checkSession',
        path: 'tt-check-session/tt-check-session',
      },
      {
        name: '获取用户信息 tt.getUserInfo',
        path: 'tt-get-user-info/tt-get-user-info',
      },
      {
        name: '提前向用户发起授权请求 tt.authorize',
        path: 'tt-authorize/tt-authorize',
      },
      {
        name: '跳转到另一个小程序 navigateToMiniProgram',
        path: 'tt-navigate-to-mini-program/tt-navigate-to-mini-program',
      },
      {
        name: '返回到上一个小程序 navigateBackMiniProgram',
        path: 'tt-navigate-back-mini-program/tt-navigate-back-mini-program',
      },
      {
        name: '创建激励视频广告 createRewardedVideoAd',
        path: 'tt-create-rewarded-video-ad/tt-create-rewarded-video-ad',
      },
      {
        name: '打开设置页面 tt.openSetting',
        path: 'tt-open-setting/tt-open-setting',
      },
      {
        name: '分析数据 tt.interactionAnalysis',
        path: 'tt-interaction-analysis/tt-interaction-analysis',
      },
      {
        name: '关注小程序绑定的头条号 tt.followOfficialAccount',
        path: 'tt-follow-official-account/tt-follow-official-account',
      },
      {
        name: '查看用户是否已关注头条号 tt.checkFollowState',
        path: 'tt-check-follow-state/tt-check-follow-state',
      },
      {
        name: '获取用户已经授权过的配置 tt.getSetting',
        path: 'tt-get-setting/tt-get-setting',
      },
      {
        name: '选择收货地址 tt.chooseAddress',
        path: 'tt-choose-address/tt-choose-address',
      },
      {
        name: '自定义分析数据上报接口 tt.reportAnalytics ',
        path: 'tt-report-analytics/tt-report-analytics',
      },
      {
        name: '担保交易 tt.pay',
        path: 'secured-payment/secured-payment',
      },
      {
        name: '订阅消息 tt.requestSubscribeMessage ',
        path: 'tt-request-subscribe-message/tt-request-subscribe-message',
      },
    ],
  },
  {
    name: '网络',
    open: false,
    icon: '/image/icon/network-icon.png',
    pages: [
      {
        name: '发起请求 Request',
        path: 'tt-request/tt-request',
      },
      {
        name: '上传文件 UploadFile',
        path: 'tt-upload-file/tt-upload-file',
      },
      {
        name: '下载/保存文件 DownloadFile',
        path: 'tt-download-file/tt-download-file',
      },
      {
        name: 'WebSocket',
        path: 'tt-connect-socket/tt-connect-socket',
      },
      {
        name: 'SocketTask.send',
        path: 'send/send',
      },
      {
        name: 'SocketTask.close',
        path: 'close/close',
      },
      {
        name: 'SocketTask.onOpen',
        path: 'on-open/on-open',
      },
      {
        name: 'SocketTask.onClose',
        path: 'on-close/on-close',
      },
      {
        name: 'SocketTask.onMessage',
        path: 'on-message/on-message',
      },
      {
        name: 'SocketTask.onError',
        path: 'on-error/on-error',
      },
    ],
  },
  {
    name: '转发',
    open: false,
    icon: '/image/icon/transmit-icon.png',
    pages: [
      {
        name: '显示当前小程序页面的分享按钮 tt.showShareMenu',
        path: 'tt-show-share-menu/tt-show-share-menu',
      },
      {
        name: '隐藏当前小程序页面的分享按钮 tt.hideShareMenu',
        path: 'tt-hide-share-menu/tt-hide-share-menu',
      },
      {
        name: '跳转到分享的视频播放页面 tt.navigateToVideoView',
        path: 'tt-navigate-to-video-view/tt-navigate-to-video-view',
      },
    ],
  },
  {
    name: '媒体',
    open: false,
    icon: '/image/icon/media-icon.png',
    pages: [
      {
        name: '图片 tt-chooseImage',
        path: 'tt-choose-image/tt-choose-image',
      },
      {
        name: '图片 tt-previewImage',
        path: 'tt-preview-image/tt-preview-image',
      },
      {
        name: '图片 tt-getImageInfo',
        path: 'tt-get-image-info/tt-get-image-info',
      },
      {
        name: '图片 tt.saveImageToPhotosAlbum',
        path: 'tt-save-image-to-photos-album/tt-save-image-to-photos-album',
      },
      {
        name: '图片 tt.compressImage',
        path: 'tt-compress-image/tt-compress-image',
      },
      {
        name: '录音tt.RecorderManager',
        path: 'tt-get-recorder-manager/tt-get-recorder-manager',
      },
      {
        name: 'RecorderManager.start',
        path: 'recorder-manager-start/recorder-manager-start',
      },
      {
        name: 'RecorderManager.pause',
        path: 'recorder-manager-pause/recorder-manager-pause',
      },
      {
        name: 'RecorderManager.resume',
        path: 'recorder-manager-resume/recorder-manager-resume',
      },
      {
        name: 'RecorderManager.stop',
        path: 'recorder-manager-stop/recorder-manager-stop',
      },
      {
        name: 'RecorderManager.onStart()',
        path: 'recorder-manager-onStart/recorder-manager-onStart',
      },
      {
        name: 'RecorderManager.onPause()',
        path: 'recorder-manager-onPause/recorder-manager-onPause',
      },
      {
        name: 'RecorderManager.onResume()',
        path: 'recorder-manager-onResume/recorder-manager-onResume',
      },
      {
        name: 'RecorderManager.onStop()',
        path: 'recorder-manager-onStop/recorder-manager-onStop',
      },
      {
        name: 'RecorderManager.onFrameRecorded()',
        path: 'recorder-manager-onFrameRecorded/recorder-manager-onFrameRecorded',
      },
      {
        name: 'RecorderManager.onError()',
        path: 'recorder-manager-onError/recorder-manager-onError',
      },
      {
        name: '音频 tt.createInnerAudioContext',
        path: 'tt-create-inner-audio-context/tt-create-inner-audio-context',
      },
      {
        name: 'InnerAudioContext.play',
        path: 'InnerAudioContext.play/InnerAudioContext.play',
      },
      {
        name: 'InnerAudioContext.pause',
        path: 'InnerAudioContext.pause/InnerAudioContext.pause',
      },
      {
        name: 'InnerAudioContext.stop',
        path: 'InnerAudioContext.stop/InnerAudioContext.stop',
      },
      {
        name: 'InnerAudioContext.seek',
        path: 'InnerAudioContext.seek/InnerAudioContext.seek',
      },
      {
        name: 'InnerAudioContext.destroy',
        path: 'InnerAudioContext.destroy/InnerAudioContext.destroy',
      },
      {
        name: 'InnerAudioContext.onCanplay',
        path: 'InnerAudioContext.onCanplay/InnerAudioContext.onCanplay',
      },
      {
        name: 'InnerAudioContext.offCanplay',
        path: 'InnerAudioContext.offCanplay/InnerAudioContext.offCanplay',
      },
      {
        name: 'InnerAudioContext.onPlay',
        path: 'InnerAudioContext.onPlay/InnerAudioContext.onPlay',
      },
      {
        name: 'InnerAudioContext.offPlay',
        path: 'InnerAudioContext.offPlay/InnerAudioContext.offPlay',
      },
      {
        name: 'InnerAudioContext.onPause',
        path: 'InnerAudioContext.onPause/InnerAudioContext.onPause',
      },
      {
        name: 'InnerAudioContext.offPause',
        path: 'InnerAudioContext.offPause/InnerAudioContext.offPause',
      },
      {
        name: 'InnerAudioContext.onStop',
        path: 'InnerAudioContext.onStop/InnerAudioContext.onStop',
      },
      {
        name: 'InnerAudioContext.offStop',
        path: 'InnerAudioContext.offStop/InnerAudioContext.offStop',
      },
      {
        name: 'InnerAudioContext.onEnded',
        path: 'InnerAudioContext.onEnded/InnerAudioContext.onEnded',
      },
      {
        name: 'InnerAudioContext.offEnded',
        path: 'InnerAudioContext.offEnded/InnerAudioContext.offEnded',
      },
      {
        name: 'InnerAudioContext.onTimeUpdate',
        path: 'InnerAudioContext.onTimeUpdate/InnerAudioContext.onTimeUpdate',
      },
      {
        name: 'InnerAudioContext.offTimeUpdate',
        path: 'InnerAudioContext.offTimeUpdate/InnerAudioContext.offTimeUpdate',
      },
      {
        name: 'InnerAudioContext.onError',
        path: 'InnerAudioContext.onError/InnerAudioContext.onError',
      },
      {
        name: 'InnerAudioContext.offError',
        path: 'InnerAudioContext.offError/InnerAudioContext.offError',
      },
      {
        name: 'InnerAudioContext.onWaiting',
        path: 'InnerAudioContext.onWaiting/InnerAudioContext.onWaiting',
      },
      {
        name: 'InnerAudioContext.offWaiting',
        path: 'InnerAudioContext.offWaiting/InnerAudioContext.offWaiting',
      },
      {
        name: 'InnerAudioContext.onSeeking',
        path: 'InnerAudioContext.onSeeking/InnerAudioContext.onSeeking',
      },
      {
        name: 'InnerAudioContext.offSeeking',
        path: 'InnerAudioContext.offSeeking/InnerAudioContext.offSeeking',
      },
      {
        name: 'InnerAudioContext.onSeeked',
        path: 'InnerAudioContext.onSeeked/InnerAudioContext.onSeeked',
      },
      {
        name: 'InnerAudioContext.offSeeked',
        path: 'InnerAudioContext.offSeeked/InnerAudioContext.offSeeked',
      },
      {
        name: '音频 tt.getBackgroundAudioManager',
        path: 'tt-get-background-audio-manager/tt-get-background-audio-manager',
      },
      {
        name: 'BackgroundAudioManager.play',
        path: 'BackgroundAudioManager.play/BackgroundAudioManager.play',
      },
      {
        name: 'BackgroundAudioManager.pause',
        path: 'BackgroundAudioManager.pause/BackgroundAudioManager.pause',
      },
      {
        name: 'BackgroundAudioManager.stop',
        path: 'BackgroundAudioManager.stop/BackgroundAudioManager.stop',
      },
      {
        name: 'BackgroundAudioManager.seek',
        path: 'BackgroundAudioManager.seek/BackgroundAudioManager.seek',
      },
      {
        name: 'BackgroundAudioManager.onCanplay',
        path: 'BackgroundAudioManager.onCanplay/BackgroundAudioManager.onCanplay',
      },
      {
        name: 'BackgroundAudioManager.onPlay',
        path: 'BackgroundAudioManager.onPlay/BackgroundAudioManager.onPlay',
      },
      {
        name: 'BackgroundAudioManager.onPause',
        path: 'BackgroundAudioManager.onPause/BackgroundAudioManager.onPause',
      },
      {
        name: 'BackgroundAudioManager.onStop',
        path: 'BackgroundAudioManager.onStop/BackgroundAudioManager.onStop',
      },
      {
        name: 'BackgroundAudioManager.onEnded',
        path: 'BackgroundAudioManager.onEnded/BackgroundAudioManager.onEnded',
      },
      {
        name: 'BackgroundAudioManager.onTimeUpdate',
        path: 'BackgroundAudioManager.onTimeUpdate/BackgroundAudioManager.onTimeUpdate',
      },
      {
        name: 'BackgroundAudioManager.offTimeUpdate',
        path: 'BackgroundAudioManager.offTimeUpdate/BackgroundAudioManager.offTimeUpdate',
      },
      {
        name: 'BackgroundAudioManager.onError',
        path: 'BackgroundAudioManager.onError/BackgroundAudioManager.onError',
      },
      {
        name: 'BackgroundAudioManager.onWaiting',
        path: 'BackgroundAudioManager.onWaiting/BackgroundAudioManager.onWaiting',
      },
      {
        name: 'BackgroundAudioManager.onSeeking',
        path: 'BackgroundAudioManager.onSeeking/BackgroundAudioManager.onSeeking',
      },
      {
        name: 'BackgroundAudioManager.onSeeked',
        path: 'BackgroundAudioManager.onSeeked/BackgroundAudioManager.onSeeked',
      },
      {
        name: 'BackgroundAudioManager.onNext',
        path: 'BackgroundAudioManager.onNext/BackgroundAudioManager.onNext',
      },
      {
        name: 'BackgroundAudioManager.onPrev',
        path: 'BackgroundAudioManager.onPrev/BackgroundAudioManager.onPrev',
      },
      {
        name: '视频 tt.chooseVideo',
        path: 'tt-choose-video/tt-choose-video',
      },
      {
        name: '视频 tt.saveVideoToPhotosAlbum',
        path: 'tt-save-video-to-photos-album/tt-save-video-to-photos-album',
      },
      {
        name: '视频 tt.createVideoContext',
        path: 'tt-create-video-context/tt-create-video-context',
      },
      {
        name: '视频 tt.createLivePlayerContext',
        path: 'tt-create-live-player-context/tt-create-live-player-context',
      },
      {
        name: '视频 tt.preloadVideo',
        path: 'tt-preload-video/tt-preload-video',
      },
      {
        name: '相机 tt.createCameraContext',
        path: 'tt-create-camera-context/tt-create-camera-context',
      },
      {
        name: 'CameraContext.onCameraFrame',
        path: 'CameraContext.onCameraFrame/CameraContext.onCameraFrame',
      },
      {
        name: 'CameraContext.setZoom',
        path: 'CameraContext.setZoom/CameraContext.setZoom',
      },
      {
        name: 'CameraFrameListener.start',
        path: 'CameraFrameListener.start/CameraFrameListener.start',
      },
      {
        name: 'CameraFrameListener.stop',
        path: 'CameraFrameListener.stop/CameraFrameListener.stop',
      },
    ],
  },
  {
    name: '地图',
    open: false,
    icon: '/image/icon/map-icon.png',
    pages: [
      {
        name: '创建map上下文mapContext对象 tt.createMapContext',
        path: 'tt-create-map-context/tt-create-map-context',
      },
      {
        name: 'mapContext实例',
        path: 'map-context/map-context',
      },
      {
        name: 'mapContext.getCenterLocation',
        path: 'get-center-location/get-center-location',
      },
      {
        name: 'mapContext.getRegion',
        path: 'get-region/get-region',
      },
      {
        name: 'mapContext.getScale',
        path: 'get-scale/get-scale',
      },
      {
        name: 'mapContext.moveToLocation',
        path: 'move-to-location/move-to-location',
      },
      {
        name: 'mapContext.includePoints',
        path: 'include-points/include-points',
      },
    ],
  },
  {
    name: '文件',
    open: false,
    icon: '/image/icon/file-icon.png',
    pages: [
      {
        name: '获取全局唯一的文件管理器 tt.getFileSystemManager',
        path: 'tt-get-file-system-manager/tt-get-file-system-manager',
      },
      {
        name: '保存临时文件到本地永久目录 tt.saveFile',
        path: 'tt-save-file/tt-save-file',
      },
      {
        name: '获取文件信息 tt.getFileInfo',
        path: 'tt-get-file-info/tt-get-file-info',
      },
      {
        name: '获取本地已保存的文件列表 tt.getSavedFileList',
        path: 'tt-get-saved-file-list/tt-get-saved-file-list',
      },
      {
        name: '删除已保存的本地文件 tt.removeSavedFile',
        path: 'tt-remove-saved-file/tt-remove-saved-file',
      },
      {
        name: '文件的状态对象stats Stats',
        path: 'stats/stats',
      },
      {
        name: '判断当前文件是否是普通文件 Stats.isFile',
        path: 'stats-is-file/stats-is-file',
      },
      {
        name: '判断当前文件是否是目录 Stats.isDirectory',
        path: 'stats-is-directory/stats-is-directory',
      },
      {
        name: 'FileSystemManager.access',
        path: 'file-system-manager-access/file-system-manager-access',
      },
      {
        name: 'FileSystemManager.accessSync',
        path: 'file-system-manager-access-sync/file-system-manager-access-sync',
      },
      {
        name: 'FileSystemManager.saveFile',
        path: 'file-system-manager-save-file/file-system-manager-save-file',
      },
      {
        name: 'FileSystemManager.saveFileSync',
        path: 'file-system-manager-save-file-sync/file-system-manager-save-file-sync',
      },
      {
        name: 'FileSystemManager.getSavedFileList',
        path: 'file-system-manager-get-saved-file-list/file-system-manager-get-saved-file-list',
      },
      {
        name: 'FileSystemManager.removeSavedFile',
        path: 'file-system-manager-remove-saved-file/file-system-manager-remove-saved-file',
      },
      {
        name: 'FileSystemManager.copyFile',
        path: 'file-system-manager-copy-file/file-system-manager-copy-file',
      },
      {
        name: 'FileSystemManager.copyFileSync',
        path: 'file-system-manager-copy-file-sync/file-system-manager-copy-file-sync',
      },
      {
        name: 'FileSystemManager.getFileInfo',
        path: 'file-system-manager-get-file-info/file-system-manager-get-file-info',
      },
      {
        name: 'FileSystemManager.mkdir',
        path: 'file-system-manager-mkdir/file-system-manager-mkdir',
      },
      {
        name: 'FileSystemManager.mkdirSync',
        path: 'file-system-manager-mkdir-sync/file-system-manager-mkdir-sync',
      },
      {
        name: 'FileSystemManager.readdir',
        path: 'file-system-manager-readdir/file-system-manager-readdir',
      },
      {
        name: 'FileSystemManager.readdirSync',
        path: 'file-system-manager-readdir-sync/file-system-manager-readdir-sync',
      },
      {
        name: 'FileSystemManager.readFile',
        path: 'file-system-manager-read-file/file-system-manager-read-file',
      },
      {
        name: 'FileSystemManager.readFileSync',
        path: 'file-system-manager-read-file-sync/file-system-manager-read-file-sync',
      },
      {
        name: 'FileSystemManager.rename',
        path: 'file-system-manager-rename/file-system-manager-rename',
      },
      {
        name: 'FileSystemManager.renameSync',
        path: 'file-system-manager-rename-sync/file-system-manager-rename-sync',
      },
      {
        name: 'FileSystemManager.rmdir',
        path: 'file-system-manager-rmdir/file-system-manager-rmdir',
      },
      {
        name: 'FileSystemManager.rmdirSync',
        path: 'file-system-manager-rmdir-sync/file-system-manager-rmdir-sync',
      },
      {
        name: 'FileSystemManager.stat',
        path: 'file-system-manager-stat/file-system-manager-stat',
      },
      {
        name: 'FileSystemManager.statSync',
        path: 'file-system-manager-stat-sync/file-system-manager-stat-sync',
      },
      {
        name: 'FileSystemManager.unlink',
        path: 'file-system-manager-unlink/file-system-manager-unlink',
      },
      {
        name: 'FileSystemManager.unlinkSync',
        path: 'file-system-manager-unlink-sync/file-system-manager-unlink-sync',
      },
      {
        name: 'FileSystemManager.writeFile',
        path: 'file-system-manager-write-file/file-system-manager-write-file',
      },
      {
        name: 'FileSystemManager.writeFileSync',
        path: 'file-system-manager-write-file-sync/file-system-manager-write-file-sync',
      },
      {
        name: 'FileSystemManager.unzip',
        path: 'file-system-manager-unzip/file-system-manager-unzip',
      },
    ],
  },
  {
    name: '数据缓存',
    open: false,
    icon: '/image/icon/data-icon.png',
    pages: [
      {
        name: '数据缓存 Storage',
        path: 'storage/storage',
      },
      {
        name: '设置缓存 setStorage',
        path: 'tt-set-storage/tt-set-storage',
      },
      {
        name: '设置缓存(同步) setStorageSync',
        path: 'tt-set-storage-sync/tt-set-storage-sync',
      },
      {
        name: '获取本地缓存数据的相关信息(同步) getStorageInfoSync',
        path: 'tt-get-storage-info-sync/tt-get-storage-info-sync',
      },
      {
        name: '获取本地缓存数据的相关信息 getStorageInfo',
        path: 'tt-get-storage-info/tt-get-storage-info',
      },
      {
        name: '清理全部本地缓存数据 clearStorage',
        path: 'tt-clear-storage/tt-clear-storage',
      },
      {
        name: '清理全部本地缓存数据(同步) clearStorageSync',
        path: 'tt-clear-storage-sync/tt-clear-storage-sync',
      },
      {
        name: '获取缓存 tt.getStorage',
        path: 'tt-get-storage/tt-get-storage',
      },
      {
        name: '获取缓存(同步) tt.getStorageSync',
        path: 'tt-get-storage-sync/tt-get-storage-sync',
      },
      {
        name: '移除缓存 tt.removeStorage',
        path: 'tt-remove-storage/tt-remove-storage',
      },
      {
        name: '移除缓存(同步) tt.removeStorageSync',
        path: 'tt-remove-storage-sync/tt-remove-storage-sync',
      },
    ],
  },
  {
    name: '位置',
    open: false,
    icon: '/image/icon/location-icon.png',
    pages: [
      {
        name: '获取当前位置 GetLocation',
        path: 'tt-get-location/tt-get-location',
      },
      {
        name: '使用原生地图查看位置 OpenLocation',
        path: 'tt-open-location/tt-open-location',
      },
      {
        name: '打开地图选择位置 chooseLocation',
        path: 'tt-choose-location/tt-choose-location',
      },
    ],
  },
  {
    name: '设备',
    open: false,
    icon: '/image/icon/equipment-icon.png',
    pages: [
      {
        name: '获取手机网络类型 GetNetworkType',
        path: 'tt-get-network-type/tt-get-network-type',
      },
      {
        name: '获取手机系统信息 GetSystemInfo',
        path: 'tt-get-system-info/tt-get-system-info',
      },
      {
        name: '获取手机系统信息 GetSystemInfosync',
        path: 'tt-get-system-info-sync/tt-get-system-info-sync',
      },
      {
        name: '监听手机内存状态 OnMemoryWarning',
        path: 'tt-on-memory-warning/tt-on-memory-warning',
      },
      {
        name: '监听网络状态 OnNetworkStatusChange',
        path: 'tt-on-network-status-change/tt-on-network-status-change',
      },
      {
        name: '获取wifi列表 GetWifiList',
        path: 'tt-get-wifi-list/tt-get-wifi-list',
      },
      {
        name: '监听获取到wifi列表数据事件 OnGetWifiList',
        path: 'tt-get-wifi-list/tt-get-wifi-list',
      },
      {
        name: '取消监听获取到wifi列表数据事件 OffGetWifiList',
        path: 'offGetWifiList/offGetWifiList',
      },
      {
        name: '获取手机连接wifi GetConnectedWifi',
        path: 'tt-get-connected-wifi/tt-get-connected-wifi',
      },
      {
        name: '开始监听加速度计数据 StartAccelerometer',
        path: 'tt-start-accelerometer/tt-start-accelerometer',
      },
      {
        name: '停止监听加速度计数据 StopAccelerometer',
        path: 'tt-stop-accelerometer/tt-stop-accelerometer',
      },
      {
        name: '监听加速度计数据 OnAccelerometerChange',
        path: 'tt-on-accelerometer-change/tt-on-accelerometer-change',
      },
      {
        name: '开始监听罗盘数据 StartCompass',
        path: 'tt-start-compass/tt-start-compass',
      },
      {
        name: '停止监听罗盘数据 StopCompass',
        path: 'tt-stop-compass/tt-stop-compass',
      },
      {
        name: '监听罗盘数据 OnCompassChange',
        path: 'tt-on-compass-change/tt-on-compass-change',
      },
      {
        name: '扫码 ScanCode',
        path: 'tt-scan-code/tt-scan-code',
      },
      {
        name: '监听用户截屏 OnUserCaptureScreen',
        path: 'tt-on-user-capture-screen/tt-on-user-capture-screen',
      },
      {
        name: '取消监听用户截屏 OffUserCaptureScreen',
        path: 'tt-off-user-capture-screen/tt-off-user-capture-screen',
      },
      {
        name: '禁止录屏 disableUserScreenRecord',
        path: 'tt-disable-user-screen-record/tt-disable-user-screen-record',
      },
      {
        name: '取消禁止录屏 enableUserScreenRecord',
        path: 'tt-enable-user-screen-record/tt-enable-user-screen-record',
      },
      {
        name: '监听录屏事件 onUserScreenRecord',
        path: 'tt-on-user-screen-record/tt-on-user-screen-record',
      },
      {
        name: '取消监听录屏事件 offUserScreenRecord',
        path: 'tt-off-user-screen-record/tt-off-user-screen-record',
      },
      {
        name: '短振动 vibrateShort',
        path: 'tt-vibrate-short/tt-vibrate-short',
      },
      {
        name: '长振动 VibrateLong',
        path: 'tt-vibrate-long/tt-vibrate-long',
      },
      {
        name: '打电话 MakePhoneCall',
        path: 'tt-make-phone-call/tt-make-phone-call',
      },
      {
        name: '剪贴板 GetClipboardData',
        path: 'tt-get-clipboard-data/tt-get-clipboard-data',
      },
      {
        name: '剪贴板 SetClipboardData',
        path: 'tt-set-clipboard-data/tt-set-clipboard-data',
      },
      {
        name: '屏幕常亮 SetKeepScreenOn',
        path: 'tt-set-keep-screen-on/tt-set-keep-screen-on',
      },
      {
        name: '设置屏幕亮度 setScreenBrightness',
        path: 'tt-set-screen-brightness/tt-set-screen-brightness',
      },
      {
        name: '获取屏幕亮度 getScreenBrightness',
        path: 'get-screen-brightness/get-screen-brightness',
      },
    ],
  },
  {
    name: '画布',
    open: false,
    icon: '/image/icon/canvas-icon.png',
    pages: [
      {
        name: '画布 tt.createCanvasContext',
        path: 'tt-create-canvas-context/tt-create-canvas-context',
      },
      {
        name: 'CanvasContext.beginPath',
        path: 'begin-path/begin-path',
      },
      {
        name: 'CanvasContext.clip',
        path: 'clip/clip',
      },
      {
        name: 'CanvasContext.draw',
        path: 'draw/draw',
      },
      {
        name: 'CanvasContext.lineTo',
        path: 'line-to/line-to',
      },
      {
        name: 'CanvasContext.setFontSize',
        path: 'set-font-size/set-font-size',
      },
      {
        name: 'CanvasContext.setFillStyle',
        path: 'set-fill-style/set-fill-style',
      },
      {
        name: 'CanvasContext.createLinearGradient',
        path: 'create-linear-gradient/create-linear-gradient',
      },
      {
        name: 'CanvasContext.setStrokeStyle',
        path: 'set-stroke-style/set-stroke-style',
      },
      {
        name: 'CanvasContext.setGlobalAlpha',
        path: 'set-global-alpha/set-global-alpha',
      },
      {
        name: 'CanvasContext.transform',
        path: 'transform/transform',
      },
      {
        name: 'CanvasContext.fill',
        path: 'fill/fill',
      },
      {
        name: 'CanvasContext.stroke',
        path: 'stroke/stroke',
      },
      {
        name: 'CanvasContext.setLineDash',
        path: 'set-line-dash/set-line-dash',
      },
      {
        name: 'CanvasContext.fillRect',
        path: 'fill-rect/fill-rect',
      },
      {
        name: 'CanvasContext.strokeRect',
        path: 'stroke-rect/stroke-rect',
      },
      {
        name: 'CanvasContext.drawImage',
        path: 'draw-image/draw-image',
      },
      {
        name: 'CanvasContext.measureText',
        path: 'measure-text/measure-text',
      },
      {
        name: 'CanvasContext.scale',
        path: 'scale/scale',
      },
      {
        name: 'CanvasContext.rotate',
        path: 'rotate/rotate',
      },
      {
        name: 'CanvasContext.translate',
        path: 'translate/translate',
      },
      {
        name: 'CanvasContext.save',
        path: 'save/save',
      },
      {
        name: 'CanvasContext.restore',
        path: 'restore/restore',
      },
      {
        name: 'CanvasContext.clearRect',
        path: 'clear-rect/clear-rect',
      },
      {
        name: 'CanvasContext.fillText',
        path: 'fill-text/fill-text',
      },
      {
        name: 'CanvasContext.setTextAlign',
        path: 'set-text-align/set-text-align',
      },
      {
        name: 'CanvasContext.setLineCap',
        path: 'set-line-cap/set-line-cap',
      },
      {
        name: 'CanvasContext.setLineJoin',
        path: 'set-line-join/set-line-join',
      },
      {
        name: 'CanvasContext.setLineWidth',
        path: 'set-line-width/set-line-width',
      },
      {
        name: 'CanvasContext.setMiterLimit',
        path: 'set-miter-limit/set-miter-limit',
      },
      {
        name: 'CanvasContext.setTextBaseline',
        path: 'set-text-baseline/set-text-baseline',
      },
      {
        name: 'CanvasContext.setTransform',
        path: 'set-transform/set-transform',
      },
      {
        name: 'CanvasContext.moveTo',
        path: 'move-to/move-to',
      },
      {
        name: 'CanvasContext.rect',
        path: 'rect/rect',
      },
      {
        name: 'CanvasContext.arc',
        path: 'arc/arc',
      },
      {
        name: 'CanvasContext.quadraticCurveTo',
        path: 'quadratic-curve-to/quadratic-curve-to',
      },
      {
        name: 'CanvasContext.bezierCurveTo',
        path: 'bezier-curve-to/bezier-curve-to',
      },
      {
        name: 'CanvasContext.close',
        path: 'close-path/close-path',
      },
      {
        name: 'CanvasContext.addColorStop',
        path: 'add-color-stop/add-color-stop',
      },
    ],
  },
  {
    name: '界面',
    open: false,
    icon: '/image/icon/interface-icon.png',
    pages: [
      {
        name: '显示操作菜单 ActionSheet',
        path: 'tt-show-action-sheet/tt-show-action-sheet',
      },
      {
        name: '显示模态弹窗 Modal',
        path: 'tt-show-modal/tt-show-modal',
      },
      {
        name: '显示消息提示框 Toast',
        path: 'tt-show-toast/tt-show-toast',
      },
      {
        name: '隐藏消息提示框 Toast',
        path: 'tt-hide-toast/tt-hide-toast',
      },
      {
        name: '显示loading提示框',
        path: 'tt-show-loading/tt-show-loading',
      },
      {
        name: '隐藏loading提示框',
        path: 'tt-hide-loading/tt-hide-loading',
      },
      {
        name: '引导收藏小程序 FavoriteGuide',
        path: 'tt-show-favorite-guide/tt-show-favorite-guide',
      },
      {
        name: '显示互动组件 ShowInteractionBar',
        path: 'tt-show-interaction-bar/tt-show-interaction-bar',
      },
      {
        name: '隐藏互动组件 HideInteractionBar',
        path: 'tt-hide-interaction-bar/tt-hide-interaction-bar',
      },
      {
        name: '显示导航条加载动画 ShowNavigationBarLoading',
        path: 'tt-show-navigation-bar-loading/tt-show-navigation-bar-loading',
      },
      {
        name: '隐藏导航条加载动画 HideNavigationBarLoading',
        path: 'tt-hide-navigation-bar-loading/tt-hide-navigation-bar-loading',
      },
      {
        name: '隐藏返回首页按钮 HideHomeButton',
        path: 'tt-hide-home-button/tt-hide-home-button',
      },
      {
        name: '设置页面标题 SetNavigationBarTitle',
        path: 'tt-set-navigation-bar-title/tt-set-navigation-bar-title',
      },
      {
        name: '设置页面导航栏颜色 SetNavigationBarColor',
        path: 'tt-set-navigation-bar-color/tt-set-navigation-bar-color',
      },
      {
        name: '获取胶囊按钮信息 GetMenuButtonLayout',
        path: 'tt-get-menu-button-layout/tt-get-menu-button-layout',
      },
      {
        name: '获取胶囊按钮信息 GetMenuButtonBoundingClientRect',
        path: 'tt-get-menu-button-bounding-client-rect/tt-get-menu-button-bounding-client-rect',
      },
      {
        name: '页面跳转 NavigateTo',
        path: 'navigator/navigator',
      },
      {
        name: '下拉刷新 PullDownRefresh',
        path: 'tt-start-pull-down-refresh/tt-start-pull-down-refresh',
      },
      {
        name: '停止下拉刷新 StopPullDownRefresh',
        path: 'tt-stop-pull-down-refresh/tt-stop-pull-down-refresh',
      },
      {
        name: '设置滑动返回模式 SetSwipeBackMode',
        path: 'tt-set-swipe-back-mode/tt-set-swipe-back-mode',
      },
      {
        name: '创建动画 CreateAnimation',
        path: 'tt-create-animation/tt-create-animation',
      },
      {
        name: '创建绘图 CreateCanvasContext',
        path: 'tt-create-canvas-context/tt-create-canvas-context',
      },
      {
        name: '指定当前画布内容生成图片 CanvasToTempFilePath',
        path: 'tt-canvas-to-temp-file-path/tt-canvas-to-temp-file-path',
      },
      {
        name: '页面滚动 PageScrollTo',
        path: 'tt-page-scroll-to/tt-page-scroll-to',
      },
      {
        name: '设置 SetTabBar',
        path: 'tabbar-setting/tabbar-setting',
        navigateCustom: 'tabbar-setting',
      },
      {
        name: '显示Tab右上角的红点 ShowTabBarRedDot',
        path: 'tt-show-tab-bar-red-dot/tt-show-tab-bar-red-dot',
        navigateCustom: 'tabbar-show-red-dot',
      },
      {
        name: '隐藏 Tab右上角的红点 HideTabBarRedDot',
        path: 'tt-hide-tab-bar-red-dot/tt-hide-tab-bar-red-dot',
        navigateCustom: 'tabbar-hide-red-dot',
      },
      {
        name: '显示TabBar ShowTabBar',
        path: 'tt-show-tab-bar/tt-show-tab-bar',
        navigateCustom: 'show-tabbar',
      },
      {
        name: '隐藏TabBar HideTabBar',
        path: 'tt-hide-tab-bar/tt-hide-tab-bar',
        navigateCustom: 'hide-tabbar',
      },
      {
        name: '动态设置TabBar的样式 SetTabBarStyle',
        path: 'tt-set-tab-bar-style/tt-set-tab-bar-style',
        navigateCustom: 'tabbar-set-style',
      },
      {
        name: '动态设置Tab SetTabBarItem',
        path: 'tt-set-tab-bar-item/tt-set-tab-bar-item',
        navigateCustom: 'tabbar-set-item',
      },
      {
        name: '为Tab右上角添加文本 SetTabBarBadge',
        path: 'tt-set-tab-bar-badge/tt-set-tab-bar-badge',
        navigateCustom: 'tabbar-set-badge',
      },
      {
        name: '移除Tab右上角的文本 RemoveTabBarBadge',
        path: 'tt-remove-tab-bar-badge/tt-remove-tab-bar-badge',
        navigateCustom: 'tabbar-remove-badge',
      },
      {
        name: '监听窗口尺寸变化事件 OnWindowResize',
        path: 'tt-on-window-resize/tt-on-window-resize',
      },
      {
        name: '取消监听窗口尺寸变化事件 OffWindowResize',
        path: 'tt-off-window-resize/tt-off-window-resize',
      },
      {
        name: 'navigateTo跳转指定页面 NavigateTo',
        path: 'tt-navigate-to/tt-navigate-to',
      },
      {
        name: 'redirectTo跳转指定页面 RedirectTo',
        path: 'tt-redirect-to/tt-redirect-to',
      },
      {
        name: '跳转Tabbar页面 SwitchTab',
        path: 'tt-switch-tab/tt-switch-tab',
      },
      {
        name: '返回上一页面 NavigateBack',
        path: 'tt-navigate-back/tt-navigate-back',
      },
      {
        name: 'ReLaunch跳转页面 ReLaunch',
        path: 'tt-re-launch/tt-re-launch',
      },
      {
        name: 'Canvas.getContext',
        path: 'Canvas.getContext/Canvas.getContext',
      },
      {
        name: 'Canvas.requestAnimationFrame',
        path: 'Canvas.requestAnimationFrame/Canvas.requestAnimationFrame',
      },
      {
        name: 'Canvas.cancelAnimationFrame',
        path: 'Canvas.cancelAnimationFrame/Canvas.cancelAnimationFrame',
      },
      {
        name: 'Canvas.createImage',
        path: 'Canvas.createImage/Canvas.createImage',
      },
      {
        name: 'tt.createOffscreenCanvas',
        path: 'tt-create-offscreenCanvas/tt-create-offscreenCanvas',
      },
      {
        name: 'OffscreenCanvas',
        path: 'OffscreenCanvas/OffscreenCanvas',
      },
      {
        name: 'OffscreenCanvas.getContext',
        path: 'getContext/getContext',
      },
    ],
  },
  {
    name: '第三方平台',
    open: false,
    icon: '/image/icon/third-party-icon.png',
    pages: [
      {
        name: '获取第三方平台自定义的数据字段 GetExtConfig',
        path: 'tt-get-ext-config/tt-get-ext-config',
      },
      {
        name: '同步获取第三方平台自定义的字段 GetExtConfigSync',
        path: 'tt-get-ext-config-sync/tt-get-ext-config-sync',
      },
    ],
  },
  {
    name: 'TTML',
    open: false,
    icon: '/image/icon/tml-icon.png',
    pages: [
      {
        name: '返回一个 SelectorQuery 的实例 CreateSelectorQuery',
        path: 'tt-create-selector-query/tt-create-selector-query',
      },
      {
        name: '创建并返回一个 IntersectionObserver 对象实例 CreateIntersectionObserver',
        path: 'tt-create-intersection-observer/tt-create-intersection-observer',
      },
      {
        name: '获取组件内节点信息 SelectorQuery.in',
        path: 'selector-query-in/selector-query-in',
      },
      {
        name: '选择第一个匹配选择器的节点 SelectorQuery.select',
        path: 'selector-query-select/selector-query-select',
      },
      {
        name: '选择所有匹配选择器的节点 SelectorQuery.selectAll',
        path: 'selector-query-select-all/selector-query-select-all',
      },
      {
        name: '选择显示区域 SelectorQuery.selectViewport',
        path: 'selector-query-select-viewport/selector-query-select-viewport',
      },
      {
        name: '执行所有的查询 SelectorQuery.exec',
        path: 'selector-query-exec/selector-query-exec',
      },
      {
        name: '添加节点的布局位置的查询请求 NodesRef.boundingClientRect',
        path: 'nodesref-bounding-client-rect/nodesref-bounding-client-rect',
      },
      {
        name: '添加节点的相关信息的查询 NodesRef.fields',
        path: 'nodesref-filelds/nodesref-filelds',
      },
      {
        name: '添加节点的滚动位置的查询请求 NodesRef.scrollOffset',
        path: 'nodesref-scroll-offset/nodesref-scroll-offset',
      },
      {
        name: '使用选择器指定一个节点 IntersectionObserver.relativeTo',
        path: 'intersection-observer-relative-to/intersection-observer-relative-to',
      },
      {
        name: '指定页面显示区域作为参照区域之一 IntersectionObserver.relativeToViewport',
        path: 'intersection-observer-relative-to-viewport/intersection-observer-relative-to-viewport',
      },
      {
        name: '指定目标节点并开始监听相交状态变化情况 ',
        path: 'intersection-observer-observe/intersection-observer-observe',
      },
      {
        name: '停止监听相交状态变化 IntersectionObserver.disconnect',
        path: 'intersection-observer-disconnect/intersection-observer-disconnect',
      },
    ],
  },
  {
    name: '性能优化',
    open: false,
    icon: '/image/icon/other-icon.png',
    pages: [
      {
        name: 'PerformanceEntry',
        path: 'performance-entry/performance-entry',
      },
      {
        name: 'tt.performance.getEntries',
        path: 'tt-performance-get-entries/tt-performance-get-entries',
      },
      {
        name: 'tt.performance.getEntriesByName',
        path: 'tt-performance-get-entries-by-name/tt-performance-get-entries-by-name',
      },
      {
        name: 'tt.performance.getEntriesByType',
        path: 'tt-performance-get-entries-by-type/tt-performance-get-entries-by-type',
      },
      {
        name: 'tt.performance.getEntriesByPage',
        path: 'tt-performance-get-entries-by-page/tt-performance-get-entries-by-page',
      },
      {
        name: 'tt.performance.getCurrentPageEntries',
        path: 'tt-performance-get-current-page-entries/tt-performance-get-current-page-entries',
      },
      {
        name: 'tt.performance.mark',
        path: 'tt-performance-mark/tt-performance-mark',
      },
      {
        name: 'tt.performance.clearMarks',
        path: 'tt-performance-clear-marks/tt-performance-clear-marks',
      },
    ],
  },
  {
    name: '抖音特殊能力',
    icon: '/image/icon/tik-tok-icon.png',
    pages: [
      {
        name: '抖音拍摄器',
        path: 'dy-camera/dy-camera',
      },
      {
        name: '抖音拍摄器带贴纸',
        path: 'dy-sticker/dy-sticker',
      },
    ],
  },
];
// 组件
const components = [
  {
    name: '视图容器',
    open: false,
    icon: '/image/icon/view-icon.png',
    pages: [
      {
        name: '基础视图 view',
        path: 'view/view',
      },
      {
        name: '可滚动视图区域 scroll-view',
        path: 'scroll-view/scroll-view',
      },
      {
        name: '滑块视图容器 swiper',
        path: 'swiper/swiper',
      },
    ],
  },
  {
    name: '基础内容',
    open: false,
    icon: '/image/icon/basic-content-icon.png',
    pages: [
      {
        name: '文本 text',
        path: 'text/text',
      },
      {
        name: '进度条 progress',
        path: 'progress/progress',
      },
      {
        name: '图标 icon',
        path: 'icon/icon',
      },
      {
        name: '富文本 rich-text',
        path: 'rich-text/rich-text',
      },
    ],
  },
  {
    name: '表单组件',
    open: false,
    icon: '/image/icon/form-icon.png',
    pages: [
      {
        name: '按钮 button',
        path: 'button/button',
      },
      {
        name: '多项选择器 checkbox',
        path: 'checkbox/checkbox',
      },
      {
        name: '表单 form',
        path: 'form/form',
      },
      {
        name: '输入框 input',
        path: 'input/input',
      },
      {
        name: '表单组件标签 label',
        path: 'label/label',
      },
      {
        name: '底部弹起的滚动选择器 picker',
        path: 'picker/picker',
      },
      {
        name: '滚动选择器 picker-view',
        path: 'picker-view/picker-view',
      },
      {
        name: '单项选择器 radio',
        path: 'radio/radio',
      },
      {
        name: '滑动选择器 slider',
        path: 'slider/slider',
      },
      {
        name: '开关选择器 switch',
        path: 'switch/switch',
      },
      {
        name: '多行输入框 textarea',
        path: 'textarea/textarea',
      },
    ],
  },
  {
    name: '导航',
    open: false,
    icon: '/image/icon/nav-icon.png',
    pages: [
      {
        name: '页面导航 navigator',
        path: 'navigator/navigator',
      },
    ],
  },
  {
    name: '媒体组件',
    open: false,
    icon: '/image/icon/media-icon.png',
    pages: [
      {
        name: '图片 image',
        path: 'image/image',
      },
      {
        name: '视频 video',
        path: 'video/video',
      },
      {
        name: '实时视频播放器 live-player',
        path: 'live-player/live-player',
      },
      {
        name: '相机 camera',
        path: 'camera/camera',
      },
    ],
  },
  {
    name: '画布',
    icon: '/image/icon/canvas-icon.png',
    pages: [
      {
        name: '画布 canvas',
        path: 'canvas/canvas',
      },
    ],
  },
  {
    name: '地图',
    icon: '/image/icon/map-icon.png',
    pages: [
      {
        name: '地图 map',
        path: 'map/map',
      },
    ],
  },
  {
    name: '开放能力',
    icon: '/image/icon/open-power-icon.png',
    pages: [
      {
        name: '网页容器 webview',
        path: 'webview/webview',
      },
      {
        name: '广告 ad',
        path: 'ad/ad',
      },
      {
        name: '消息推送客服 contact',
        path: 'custom-message/custom-message',
      },
      {
        name: '获取手机号 get-phone-number',
        path: 'get-phone-number/get-phone-number',
      },
    ],
  },
];
data[1].list = components;
data[2].list = api;

module.exports = {
  data,
  api,
  components,
};
