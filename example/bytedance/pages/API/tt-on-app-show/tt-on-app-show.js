Page({
  data: {
    onAppShow:""
  },
  onLoad: function (options) {
    tt.onAppShow(res=>{
      console.log(res,'onAppShow')
      this.setData({
        onAppShow:JSON.stringify(res)
      })
    })
  }
})