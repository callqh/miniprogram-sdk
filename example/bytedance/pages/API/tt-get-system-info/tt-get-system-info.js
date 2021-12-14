Page({
  data: {
    systemInfo: {}
  },
  clear () {
    this.setData({
      systemInfo: {}
    });
  },
  getSystemInfoSync() {
    var _this = this;
	  tt.getSystemInfo({
	    success(res) {
	      _this.setData({
	        systemInfo: res
	      });
	    },
	  });
  }
})
