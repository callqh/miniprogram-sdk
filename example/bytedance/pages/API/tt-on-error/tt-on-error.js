Page({
  data: {
    onError:""
  },
  onLoad: function (options) {
    tt.onError(res=>{
      console.log(res,'onError');
      this.setData({
        onError:res
      })
    })
  },
  onError(){
    throw new Error('my error msg');
  }
})