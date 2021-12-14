const app = getApp();
Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    list: [
    {
      name: 'TTML',
      open: false,
      pages: [{
        name: 'tt.createSelectorQuery',
        path: 'tt-create-selector-query/tt-create-selector-query'
      }]
    }]
  },

  toggleSwitch(e) {
    let {
      index
    } = e.currentTarget.dataset;
    let {
      list
    } = this.data;
    this.setData({
      list: list.map((item, idx) => {
        item.open = idx === index ? !item.open : false;
        return item;
      })
    });
  },

  switchBack(e) {
    tt.setNavigationBarTitle({
      title: '小程序能力展示'
    });
  }
});


