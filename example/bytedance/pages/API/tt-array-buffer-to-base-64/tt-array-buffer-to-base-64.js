Page({
  arrayBufferToBase64(){

    const arrayBuffer = new Uint8Array([98, 121, 116, 101, 100, 97, 110, 99, 101]);
    // API调用需传入要转换的 ArrayBuffer 对象, 返回转换生成的 base64 字符串
    const base64 = tt.arrayBufferToBase64(arrayBuffer);
    console.log("string", base64); 
    tt.showModal({
      content: "转换成功",
      showCancel: false
    });
  }
})