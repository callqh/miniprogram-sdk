Page({
  data: {
    length: 0
  },
  async onLoad() {
    tt.setNavigationBarTitle({ title: '通过reLaunch进入' });
    let pages = await this.getPages();
    this.setData({
      length: pages.length
    })
  },
  getPages() {
    return new Promise((resolve, reject) => {
      resolve(getCurrentPages());
    })
  },
  toRoute() {
    tt.switchTab({
      url: '/pages/API/index'
    });
  }
})