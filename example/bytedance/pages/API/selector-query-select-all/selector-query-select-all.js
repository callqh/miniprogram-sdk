Page({
  data: {
    list: []
  },
  onReady() {
    const query = tt.createSelectorQuery();
    query.selectAll(".title").boundingClientRect();
    query.exec((res) => {
      console.log(res[0]);
      this.setData({
        list: res[0]
      })
    });
  }
})