Page({
  setNavigationBarColor() {
    tt.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "#F85959",
      success(res) {
        console.log(res);
      },
      fail(res) {
        console.log("setNavigationBarColor调用失败");
      }

    });
  },
})