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
      this.ctx = tt.createLivePlayerContext('myLive', this);
    }
  },
  properties: {},
  methods: {
    livePlay(e) {
      this.ctx.play({
        success:res=>{
          console.log('livePlaysuccess', res);
        },
        fail(err) {
          console.log('livePlay err', err);
        },
        complete(res) {
          console.log('livePlay complete', res);
        }
      });
    },
    liveStop(e) {
      this.ctx.stop({
        success:res=>{
          console.log('liveStop success', res);
        },
        fail(err) {
          console.log('liveStop fail', err);
        },
        complete(res) {
          console.log('livePlay complete', res);
        }
      });
    },
    liveMute(e) {
      this.setData({
        muted: !this.data.muted
      });
      if(this.data.muted){
         this.ctx.mute({
           success:res=>{},
           fail:err=>{},
           complete:res=>{}
         });
      }else{
        this.ctx.unmute({
          success:res=>{},
           fail:err=>{},
           complete:res=>{}
        });
      }
    },
    backgroundMute(e) {
      this.setData({
        'backgroundMute': true
      });
    },
    fullScreen(){
      this.ctx.requestFullScreen({
        success:res=>{
          tt.showToast({
            title: '5s后退出全屏', // 内容
            icon:"none"
          });
          let timer=setTimeout(()=>{
            this.exitFullScreen();
            clearTimeout(timer);
          },5000)
        },
        fail:err=>{},
        complete:res=>{
          console.log('requestFullScreen complete',res)
        },
        direction:90,
      });
    },
    exitFullScreen(){
      this.ctx.exitFullScreen({
        success:res=>{},
        fail:err=>{},
        complete:res=>{},
      })
    }
  }
});