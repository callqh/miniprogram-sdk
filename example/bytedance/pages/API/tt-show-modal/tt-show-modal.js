Page({
  data: {},
  modalTap: function (e) {
    tt.showModal({
      title: "模态框标题",
      content: "模态框内容",
      showCancel: false,
      confirmText: "确定",
      cancelText: '关闭',
      success({
        confirm,
        cancel
      }) {
        if (confirm) {
          tt.showToast({
            title: 'CONFIRM'
          });
        }
        if (cancel) {
          tt.showToast({
            title: 'CANCEL',
            icon: "none"
          });
        }
      },
      fail(err) {
        console.log('fail执行了', err);
      },
      complete(res) {
        console.log('complete执行了', res);
      }

    });
  },
  noTitlemodalTap: function (e) {
    tt.showModal({
      title: '',
      content: "模态框内容",
      confirmText: "确定",
      confirmColor: "#F85959",
      cancelText: "关闭",
      cancelColor: "#efefef",
      success({
        confirm,
        cancel
      }) {
        if (confirm) {
          tt.showToast({
            title: 'CONFIRM'
          });
        }

        if (cancel) {
          tt.showToast({
            title: 'CANCEL',
            icon: "none"
          });
        }
      },
      fail(err) {
        console.log('fail执行了', err);
      },
      complete(res) {
        console.log('complete执行了', res);
      }

    });
  }
});
