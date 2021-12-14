Page({
  onLoad() {
    this.intersectionObserver = tt.createIntersectionObserver();
    this.intersectionObserver.relativeToViewport();
    this.intersectionObserver.observe("#target", function (res) {
      console.log(res);
    });
  }
})