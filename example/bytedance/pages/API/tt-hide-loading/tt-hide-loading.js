Page({
  onLoad() {
    tt.showLoading({
      title: "加载中"
    })
  },
  toast1Tap: function () {
    tt.hideLoading({
      success(res) {
        console.log('hideLoading success', res);
      },
      fail(err) {
        console.log('hideLoading fail', err);
      },
      complete(res) {
        console.log('hideLoading complete', res);
      }
    })
  },


});
