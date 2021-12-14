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
      }
    });
  },
  checkFile() {
    try {
      this.fs.accessSync(this.data.tempFilePath);
      console.log(`临时文件存在`);
      tt.showToast({
        title: '文件存在',
        icon: 'none'
      });
    } catch (err) {
      console.log(`临时文件不存在: `,err);
      tt.showToast({
        title: '文件不存在',
        icon: 'none'
      });
    }
  }
})