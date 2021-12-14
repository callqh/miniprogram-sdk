Page({
  showBarLoading() {
    tt.showNavigationBarLoading({
      success(res) {
        console.log('showNavigationBarLoading调用成功', res);
      },
      fail(err) {
        console.log('showNavigationBarLoading 调用失败');
      },
      complete(res) {
        console.log('complete调用', res);
      }
    })
  }
})