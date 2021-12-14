Page({
  data: {
    response: '',
    buttonDisabled: false,
  },
  /**
   * request请求
   * @param {Object} ops
   * 
   * */
  request(ops = {}) {
    let that = this;
    this.setData({ buttonDisabled: true });
    let config = {
      url: ops.url || 'https://docs.bytedance.net/api/resource_package/get_info/?package_version=17',
      header: ops.header || {
        "content-type": "application/json"
      },
      method: ops.method || "GET", //GET POST OPTIONS PUT HEAD DELETE
      data: ops.data || {
        noncestr: Date.now()
      },
      dataType: ops.dataType || "json",
      responseType: ops.responseType || "text",
      success(res) {
        console.log(that.method, 'request success', res);
        if (res.statusCode !== 200) {
          that.setData({ response: '' });
          that.msg('接口错误', 'fail');
          return;
        }
        that.setData({
          response: JSON.stringify(res.data)
        })
      },
      fail(err) {
        console.log(that.method, 'request fail', err);
        if (err.errMsg === 'request:fail abort') that.msg('已经取消本次请求', 'fail', 2000);
      },
      complete(res) {
        that.requestTask = null;
        that.setData({ buttonDisabled: false });
        console.log(that.method, 'request complete', res);
      }
    }
    this.requestTask = tt.request(config);
  },
  makeRequest(e) {
    let { type } = e.currentTarget.dataset;
    this.request({ method: type });
  },
  abortRequest() {
    this.request();
    this.requestTask.abort();
  },
  /**
   * 消息提示
   * @param {string} title - 提示内容
   * @param {string} icon - 提示图标 [success,none,fail,loading] 默认none
   * @param {number} duration - 显示时间 默认1500
   * */
  msg(title, icon = 'none', duration = 1500) {
    tt.showToast({
      title,
      icon,
      duration,
      success(res) {
        console.log('tt.showToast success', res);
      },
      fail(err) {
        console.log('tt.showToast fail', err);
      },
      complete(res) {
        console.log('showToast complete', res);
      }
    })
  }
});