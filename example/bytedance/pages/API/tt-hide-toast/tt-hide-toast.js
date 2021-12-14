Page({
  onLoad() {
    tt.showToast({
      title: "加载中",
      duration: 60000,
      icon: 'loading'
    });
  },
  hideToast: function () {
    tt.hideToast({
      success(res) {
        console.log('success 执行了', res);
      },
      fail(err) {
        console.log('fail 执行了', err);
      },
      complete(res) {
        console.log('complete 执行了', res);
      }
    });
  },

});