const str = 'action-sheet';
let itemList = [];

for (let i = 0; i < 6; i++) {
  itemList.push(str + i);
}

Page({
  actionSheetTap: function () {
    tt.showActionSheet({
      itemList,
      success: function (e) {
        tt.showToast({
          title: `你点击了第${e.tapIndex + 1}个项目`
        });
      },
      fail(err) {
        console.log('fail执行了', err);
      },
      complete(res) {
        console.log('complete执行了', res)
      }
    });
  }
});