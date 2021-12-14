Page({
  toast1Tap: function () {
    tt.showToast({
      title: "默认内容"
    });
  },
  toast2Tap: function () {
    tt.showToast({
      title: "duration 3000",
      duration: 3000
    });
  },
  toast3Tap: function (e) {
    let { icon } = e.currentTarget.dataset;
    tt.showToast({
      title: `${icon}提示`,
      icon,
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
  }

});