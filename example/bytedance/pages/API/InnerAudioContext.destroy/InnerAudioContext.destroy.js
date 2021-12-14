const app = getApp();
let dataUrl = 'https://sf1-ttcdn-tos.pstatp.com/obj/developer/sdk/0000-0001.mp3';
Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    playing: false,
    paused: false,
    innerAudioContext: ""
  },
  onLoad({src}) {
    if (this.innerAudioContext) {
      return;
    }
    this.canUpdateUI = true;
    var iac = this.innerAudioContext = tt.createInnerAudioContext();
    this.setData({
      innerAudioContext: iac
    })
    iac.src = dataUrl;
    iac.startTime = 0;
    iac.obeyMuteSwitch = false;
    iac.onCanplay(() => {
      this.updateUI();
    });
    iac.onPlay(() => {
      this.updateUI();
    });
    iac.onPause(() => {
      this.updateUI();
    });
    iac.onStop(() => {
      this.updateUI();
    })
  },
  updateUI() {
    var iac = this.innerAudioContext;
    if (this.canUpdateUI) {
      this.setData({
        playing: !iac.paused
      });
    }
  },
  onUnload() {
    if (this.innerAudioContext) {
      this.innerAudioContext.destroy();
    }
  },
  pause() {
    if(!this.innerAudioContext) {
      return tt.showModal({
        content: '当前无 innerAudioContext 实例', // 内容
        showCancel: false
      });
    }
    this.innerAudioContext.pause();
    this.updateUI();
  },
  play() {
    if(!this.innerAudioContext) {
      return tt.showModal({
        content: '当前无 innerAudioContext 实例', // 内容
        showCancel: false
      });
    }
    this.innerAudioContext.play();
    this.updateUI();
  },
  stop() {
    if(!this.innerAudioContext) {
      return tt.showModal({
        content: '当前无 innerAudioContext 实例', // 内容
        showCancel: false
      });
    }
    this.innerAudioContext.stop();
    this.updateUI();
  },
  destroy(){
    this.innerAudioContext.destroy();
    this.setData({
      innerAudioContext: ""
    })
    this.innerAudioContext = ""
  }
});