Page({
  data: {
    latitude: 39.907957,
    longitude: 116.397493,
    scale: 15,
    circles: [
      {
        latitude: 39.907957,
        longitude: 116.397493,
        radius: 400,
      },
    ],
    markers: [
      {
        id: 1,
        longitude: 116.397493,
        latitude: 39.907957,
        title: "这是地标1",
      },
      {
        id: 2,
        longitude: 116.39394,
        latitude: 39.90503,
        title: "这是地标2",
      },
      {
        id: 3,
        longitude: 116.40159,
        latitude: 39.90511,
        title: "这是地标3",
      }
    ],
    polyline: [
      {
        points: [
          {
            longitude: 116.397493,
            latitude: 39.907957,
          },
          {
            longitude: 116.39394,
            latitude: 39.90503,
          },
          {
            longitude: 116.40159,
            latitude: 39.90511,
          },
        ],
        dottedLine: false,
        arrowLine: false,
      },
    ],
  },
  onReady: function (e) {
    this.mapCtx = tt.createMapContext("myMap");
  },
  markertap(e) {
    console.log("tap marker", e);
  },
  maptap(e) {
    console.log("tap map", e);
  },
  callouttap(e) {
    console.log("tap callout", e);
  },
  regionchange(e) {
    console.log("regionchange", e);
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
  msg(title, duration = 1500) {
    tt.showToast({
      title: title,
      duration,
      icon: 'none'
    });
  }
});