Component({
  data: {
    autoplay: false,
    src: 'http://tosv.byted.org/obj/developer/bytdance.flv',
    objectFit: 'contain',
    orientation: 'vertical',
    minCache: 1,
    maxCache: 3,
    muted: false,
    backgroundMute: false
  },
  lifetimes: {
    attached() {
      this.ctx = tt.createLivePlayerContext('myLive');
    }
  },
  properties: {},
  methods: {
    statechange(e) {
      console.log('播放状态变化 statechange' + JSON.stringify(e));
    },

    netstatus(e) {
      console.log('网络状态变化 netstatus' + JSON.stringify(e));
    },

    livePlay(e) {
      console.log('开始调用播放：', this.ctx);
      this.ctx.play();
    },

    changeObjectFit(e) {
      this.setData({
        objectFit: this.data.objectFit === 'contain' ? 'fillCrop' : 'contain'
      });
    },

    liveStop(e) {
      this.ctx.stop();
    },

    liveMute(e) {
      this.setData({
        muted: !this.data.muted
      });
    },

    backgroundMute(e) {
      this.setData({
        'backgroundMute': true
      });
    }

  }
});