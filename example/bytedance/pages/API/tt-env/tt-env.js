Page({
  data: {
    env:""
  },
  env(){
    this.setData({
      env:JSON.stringify(tt.env)
    })
  }
})