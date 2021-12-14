Page({
  data: {
    nodes: {}
  },
  onReady() {
    const query = tt.createSelectorQuery();
    // 选取一个节点
    query.select(".title").boundingClientRect();
    query.exec((res) => {
      console.log(res[0]);
      this.setData({
        nodes: res[0] || {}
      })
    });
  }
})