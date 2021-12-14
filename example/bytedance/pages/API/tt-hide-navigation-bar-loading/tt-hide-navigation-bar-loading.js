Page({
  onLoad() {
    tt.showNavigationBarLoading();
  },
  hideBarLoading() {
    tt.hideNavigationBarLoading({
      success(res) {
        console.log('hideNavigationBarLoading调用成功', res);
      },
      fail(err) {
        console.log('hideNavigationBarLoading 调用失败');
      },
      complete(res) {
        console.log('complete调用', res);
      }
    })
  }
})