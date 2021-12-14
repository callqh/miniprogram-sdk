Page({
  data: {
    nodes: {}
  },
  getNodeInfo() {
    const query = tt.createSelectorQuery();
    query.select("#btn").boundingClientRect();
    query.exec(res => {
      console.log(res[0].width, res[0].height);
      this.setData({
        nodes: res[0]
      })
    });
  }
})