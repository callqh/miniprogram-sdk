Page({
  data: {
    scale: ''
  },
  onLoad(){
    this.mapCtx = tt.createMapContext("myMap");
  },
  getScale() {
    const that = this;
    this.mapCtx.getScale({
      success(res) {
        console.log("获取地图缩放值: ",res);
        that.setData({
          scale: res.scale
        });
      },
      fail(res){
        console.log("获取地图缩放值: ",res.errMsg);
      },
      complete(res){
        console.log("接口已调用（调用成功、失败都会执行）: ",res.errMsg);
      }
    });
  }
})