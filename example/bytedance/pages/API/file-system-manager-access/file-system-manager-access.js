const url = "https://sf3-ttcdn-tos.pstatp.com/obj/developer/download.png";
Page({
  data: {
    tempFilePath: ''
  },
  onLoad: function (options) {
    this.fs = tt.getFileSystemManager();
    tt.downloadFile({
      url: url,
      success: res => {
        this.setData({
          tempFilePath: res.tempFilePath
        })
        tt.showToast({
          title: '下载临时文件成功',
          icon: 'none'
        });
      },
      fail: err => {
        tt.showToast({
          title: '文件下载失败，请稍后重试',
          icon: 'none'
        });
      },
      complete: res => {
        console.log('downloadFile complete', res);
      }
    });
  },
  checkFile() {
    this.fs.access({
      path: this.data.tempFilePath,
      success: res => {
        console.log('success', res);
        tt.showModal({
          title: '文件存在',
          content: JSON.stringify(res),
          showCancel: false
        });
      },
      fail: err => {
        console.log('fail', err);
        tt.showModal({
          title: '文件不存在',
          content: JSON.stringify(err),
          showCancel: false
        });
      },
      complete: res => {
        console.log('complete', res);
      }
    })
  }
})