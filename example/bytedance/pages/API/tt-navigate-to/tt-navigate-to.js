Page({
  toRoute() {
    tt.navigateTo({
      url: 'tt-navigate-page',
      success(res) {
        console.log('success执行了', res);
      },
      fail(err) {
        console.log('fail执行了', err);
      },
      complete(res) {
        console.log('complete执行了', res);
      }
    });
  },
  toBack() {
    tt.navigateBack({ delta: 1 });
  }
})