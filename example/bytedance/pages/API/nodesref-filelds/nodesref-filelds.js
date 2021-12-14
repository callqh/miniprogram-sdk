Page({
  data: {
    nodes: {}
  },
  getNodeInfo() {
    let that = this;
    tt.createSelectorQuery()
      .selectViewport()
      .fields(
        {
          size: true
        },
        function (res) {
          console.log('res', res)
          const {
            width, height
          } = res;
          that.setData({
            nodes: {
              width, height
            }
          })
        }
      )
      .exec();
  }
})