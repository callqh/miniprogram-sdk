function getRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}

Page({
  onReady: function (res) { },
  inputValue: '',
  data: {
    src: '',
    isFullscreen: false,
    isLoopPlay: false,
    isShowPlayBtn: true,
    isShowControls: true,
    playBtnPosition: 'center',
    objectFitNum: 0,
    objectFitType: 'contain',
    poster: "https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png",
    unitId: 'hefbc5g67f9g1axb6p',
    isMuted: false,
    isShowMute: false,
    isVslideGesture: false,
    isFullVslideGesture: true,
    isProgressGesture: false,
    isPlayGesture: false
  },
  bindadload(e) {
    console.log('广告加载成功', e);
  },
  bindaderror(e) {
    console.log('广告出错', e);
  },
  bindadclose(e) {
    console.log('关闭广告', e);
  },
  bindadstart(e) {
    console.log('播放广告', e);
  },
  bindwaiting(e) {
    console.log('视频正在缓冲', e);
  },
  bindtimeupdate(e) {
    console.log('播放进度变化', e);
  },
  bindended(e) {
    console.log('视频已经播放结束', e);
  },
  bindpause(e) {
    console.log('视频暂停了', e);
  },
  bindplay(e) {
    console.log('视频开始播放了', e);
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value;
  },
  bindButtonTap: function () {
    var that = this;
    tt.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        });
      }
    });
  },
  videoErrorCallback: function (e) {
    console.log(e.detail.errMsg);
  },

  switchFullScreen() {
    this.setData({
      isFullscreen: !this.data.isFullscreen
    });
  },

  switchLoopPlay() {
    this.setData({
      isLoopPlay: !this.data.isLoopPlay
    });
  },

  switchPlayBtn() {
    this.setData({
      isShowPlayBtn: !this.data.isShowPlayBtn
    });
  },

  switchControls() {
    this.setData({
      isShowControls: !this.data.isShowControls
    });
  },

  switchPlayBtnPosition() {
    console.log('switchPlayBtnPosition:', this.data.playBtnPosition);
    this.setData({
      playBtnPosition: this.data.playBtnPosition === 'center' ? 'bottom' : 'center'
    });
  },

  switchFit() {
    const objectFitEnum = ['contain', 'fill', 'cover'];
    this.setData({
      objectFitType: objectFitEnum[this.data.objectFitNum % 3],
      objectFitNum: this.data.objectFitNum + 1
    });
  },
  switchMuted() {
    this.setData({
      isMuted: !this.data.isMuted
    });
  },
  switchMuteShow() {
    this.setData({
      isShowMute: !this.data.isShowMute
    });
  },
  switchVslideGesture() {
    this.setData({
      isVslideGesture: !this.data.isVslideGesture
    });
  },
  switchFullVslideGesture() {
    this.setData({
      isFullVslideGesture: !this.data.isFullVslideGesture
    });
  },
  switchProgressGesture() {
    this.setData({
      isProgressGesture: !this.data.isProgressGesture
    });
  },
  switchPlayGesture() {
    this.setData({
      isPlayGesture: !this.data.isPlayGesture
    });
  }
});