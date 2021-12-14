Page({
  base64ToArrayBuffer(){
    const base64 = "Ynl0ZWRhbmNl";
    // API调用需传入要转换的 base64 字符串, 返回转换生成的 ArrayBuffer 对象
    const arrayBuffer = tt.base64ToArrayBuffer(base64);
    console.log("转换生成的 ArrayBuffer 对象: " , arrayBuffer);
    tt.showModal({
      content: "转换成功",
      showCancel: false
    });
  }
})