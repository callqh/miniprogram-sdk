Page({
  data: {
    list: [],
    show: false
  },
  onLoad() {
    let list = [];
    for (let i = 0; i < 5; i++) {
      list.push({ text: 'demo' + i })
    }
    this.setData({
      list
    }, () => {
      this.createIntersectionObserver();
    })
  },
  createIntersectionObserver() {
    let show = false;
    let observe = tt.createIntersectionObserver(this, {
      observeAll: false,
      initialRatio: 0,
      thresholds: [0]
    });
    this.observe = observe;
    observe.relativeTo('.scroll-view-space').observe('.demo-2', (res) => {
      console.log('res', res)
      if (res.intersectionRatio > 0) show = true;
      if (res.intersectionRatio <= 0) show = false;
      this.setData({
        show
      })
    })
  },
  usePage() {
    let show = false;
    let observe = tt.createIntersectionObserver(this, {
      observeAll: false,
      initialRatio: 0,
      thresholds: [0]
    });
    this.observe = observe;
    observe.relativeToViewport({ top: 50 }).observe('.demo-2', (res) => {
      console.log('relativeToViewport', res)
      if (res.intersectionRatio > 0) show = true;
      if (res.intersectionRatio <= 0) show = false;
      this.setData({
        show
      })
    })
  },
  stopObserve() {
    this.observe.disconnect()
    tt.showToast({
      title: '已经停止监听',
      icon: 'none'
    });
  },
  backPage() {
    tt.navigateBack({ delta: 1 });
  }
})
