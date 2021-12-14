Page({
  onLoad() {
    this.intersectionObserver = tt.createIntersectionObserver();
    this.intersectionObserver.relativeToViewport({
      bottom: 100
    });
    this.intersectionObserver.observe("#target", function (res) {
      console.log(res);
    });
  }
})