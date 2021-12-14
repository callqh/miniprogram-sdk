const app = getApp();
Page({
  data: {
    imageUrl: app.globalData.imageUrl,
    url: "https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png"
  },
  binderror(err) {
    console.log('图片加载失败', err);
  },
  bindload(e) {
    console.log('图片加载成功', e);
  }
});