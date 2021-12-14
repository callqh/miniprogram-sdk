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
  },
  offAppHide(){
      tt.offAppHide();
      console.log("tt.offAppShow");
  }
})