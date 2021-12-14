Page({
  updateManager() {
    var updateManager = tt.getUpdateManager();
    updateManager.onCheckForUpdate((res) => {
      if (!res.hasUpdate) {
        tt.showToast({
          title: "无可用更新版本",
          icon: "none",
        });
      }
    });
  }
})