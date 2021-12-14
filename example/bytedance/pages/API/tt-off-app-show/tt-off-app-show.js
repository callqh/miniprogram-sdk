Page({
  data: {
    onAppShow:""
  },
  onLoad: function (options) {
    tt.offAppShow(()=>{})
    tt.onAppShow(res=>{
      console.log(res,'onAppShow')
      this.setData({
        onAppShow:JSON.stringify(res)
      });
    });
  },
  offAppShow(){
      tt.offAppShow();
      console.log("tt.offAppShow");
  }
})