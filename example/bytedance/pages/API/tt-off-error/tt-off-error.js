Page({
  data: {
    onError:""
  },
  onShow: function (options) {
    tt.onError(res=>{
      console.log(res,'onAppShow');
      this.setData({
        onError:res
      })
    })
  },
  onError(){
    throw new Error('my error msg');
  },
  offError(){
    tt.offError();
  }
})