Page({
  onLoad() {
    this.intersectionObserver = tt.createIntersectionObserver();
    this.intersectionObserver.relativeTo("#sv", { bottom: -50 });
    this.intersectionObserver.observe("#target", function (res) {
      console.log(res);
    });
  }
})