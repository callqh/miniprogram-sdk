Page({
  data: {
    latitude: 39.907957,
    longitude: 116.397493,
    markers: [
      {
        id: 1,
        latitude: 39.907957,
        longitude: 116.397493,
        title: "北京",
      },
    ],
    circles: [
      {
        latitude: 39.907957,
        longitude: 116.397493,
        radius: 100,
      },
    ],
    scale: 16,
    region: '',
  },
  onReady: function (e) {
    this.mapCtx = tt.createMapContext("myMap");
  },
  getCenterLocation: function () {
    let that = this;
    this.mapCtx.getCenterLocation({
      success: function ({ longitude, latitude }) {
        let res = `经度: ${longitude}, 纬度: ${latitude}`;
        console.log(res);
        tt.showModal({
          content: res,
          showCancel: false
        });
      },
      fail(err) {
        console.log('获取位置失败', err);
      },
      complete(res) {
        console.log('getCenterLocation complete', res);
      }
    });
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation({
      success: function (res) {
        console.log("move success: ", res);
      },
      fail: function (err) {
        console.log("move err: ", err);
      },
      complete: function (res) {
        console.log('move complete', res);
      }
    });
  },
  // Auth
  authLocation: function () {
    let that = this;
    tt.authorize({
      scope: "scope.userLocation",
      success: function (res) {
        console.log(res, res.data);
        if (res.data['scope.userLocation'] === 'ok') that.msg('您已允许授权');
      },
      fail: function (err) {
        console.log(err);
        if (err.data['scope.userLocation'] === 'auth deny') that.msg('您已拒绝授权');
      },
    });
  },
  getScale() {
    let that = this;
    this.mapCtx.getScale({
      success(res) {
        console.log('getScale 成功执行了', res);
        that.msg(`当前缩放级别：${res.scale}`);
      },
      fail(err) {
        console.log('getScale失败', err);
      },
      complete(res) {
        console.log('缩放complete执行', res);
      }
    })
  },
  getRegion() {
    let that = this;
    this.mapCtx.getRegion({
      success(res) {
        console.log('getRegion 成功', res);
        that.setData({
          region: res
        })
      },
      fail(err) {
        console.log('getRegion 失败', err);
      },
      complete(res) {
        console.log('getRegion complete', res);
      }
    })
  },
  /**
   * 提示框
   * @param {String} title -提示内容
   * @param {number} duration -- 显示时间
   * 
   * */
  msg(title, duration = 1500) {
    tt.showToast({
      title: title,
      duration,
      icon: 'none'
    });
  }
})