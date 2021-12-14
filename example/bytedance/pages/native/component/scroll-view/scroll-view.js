const order = ['demo1', 'demo2', 'demo3'];
Page({
  data: {
    toView: 'demo1',
    scrollTop: 0
  },
  upper: function (e) {},
  lower: function (e) {},
  scroll: function (e) {},
  scrollToTop: function (e) {
    this.setData({
      scrollTop: 0
    });
  },
  tap: function (e) {
    for (let i = 0; i < order.length; i++) {
      if (order[i] === this.data.toView) {
        const nextView = order[i < order.length - 1 ? i + 1 : 0]
        this.setData({
          toView: nextView,
        });
        break;
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 20
    });
  }
});