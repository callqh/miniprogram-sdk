Page({
  data: {
    focus: false
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value);
  },
  onTextInput(e) {
    console.log(e)
    this.setData({
      value: e.detail.value
    })
  },
  bindfocus(e) {
    console.log('输入框聚焦');
  },
  bindblur() {
    console.log('失去聚焦');
  },
  bindconfirm() {
    console.log('用户已点击完成');
  }
});