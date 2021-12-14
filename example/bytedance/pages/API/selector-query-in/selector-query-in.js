Page({
  data: {
    nodes: {}
  },
  onReady() {
    this.selectComponent('#myComponent', (res) => {
      if(!res){
        tt.showToast({
          title: '获取组件信息失败',
          icon: 'none'
        });
        return;
      }
      const query = tt.createSelectorQuery().in(res);
      // 选取一个节点
      query.select(".box").boundingClientRect();
      query.exec((res) => {
        console.log(res[0]);
        this.setData({
          nodes: res[0] || {}
        })
      });
    })

  }
})