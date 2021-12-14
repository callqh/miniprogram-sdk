Page({
  data: {
    src: ''
  },
  onLoad() {
    let context = tt.createCanvasContext("canvas");
    context.fillRect(0, 0, 100, 100);
    context.draw();
  },
  defaultTap() {
    let that = this;
    tt.canvasToTempFilePath({
      canvasId: 'canvas',
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      success(res) {
        console.log(res);
        that.setData({
          src: res.tempFilePath
        })
      },
      fail(err) {
        console.log('err', err);
      }

    })
  }
})
