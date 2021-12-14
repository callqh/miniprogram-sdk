Page({
  data: {
    show: false
  },
  hideHome() {
    let that = this
    tt.hideHomeButton({
      success(res) {
        console.log('hideHomeButton调用成功', res);
        that.setData({
          show: true
        })
      },
      fail(err) {
        console.log('hideHomeButton 调用失败');
      },
      complete(res) {
        console.log('complete调用', res);
      }
    })
  },
  backHome() {
    tt.switchTab({
      url: '/pages/component/index'
    });
  }
})