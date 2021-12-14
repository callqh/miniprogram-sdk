Page({
  data: {
    scale: ''
  },
  onLoad(){
    this.mapCtx = tt.createMapContext("myMap");
  },
  moveToLocation() {
    const that = this;
    tt.authorize({
      scope: "scope.userLocation",
      success: function (res) {
        console.log("已允许授权定位权限: ", res);
        that.mapCtx.moveToLocation({
          success(res) {
            console.log("移动成功, ",res);
          },
          fail(res){
            console.log("移动失败: ",res.errMsg);
          },
          complete(res){
            console.log("接口已调用（调用成功、失败都会执行）: ",res.errMsg);
          }
        });
      },
      fail: function (err) {
        console.log("已拒绝授权定位权限:",err);
        if (err.data['scope.userLocation'] === 'auth deny') that.msg('已拒绝授权定位权限');
      },
    });
  },
  msg(title, duration = 1500) {
    tt.showToast({
      title: title,
      duration,
      icon: 'none'
    });
  }
})