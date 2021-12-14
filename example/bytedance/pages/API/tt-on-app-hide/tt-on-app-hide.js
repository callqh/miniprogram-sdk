Page({
  data: {
    onAppHide:""
  },
  onLoad: function (options) {
    tt.onAppHide(()=>{
      this.setData({
        onAppHide:"切后台成功"
      })
    })
  }
})