Page({
  data: {
    systemInfo: {}
  },

  clear() {
    this.setData({
      systemInfo: {}
    });
  },

  getSystemInfoSync() {
    try {
      var res = tt.getSystemInfoSync();
      this.setData({
        systemInfo: res
      });
    } catch (e) {
      console.error('getSystemInfoSync:error', e);
    }
  }

});