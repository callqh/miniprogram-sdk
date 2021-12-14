Page({
    data: {
      content: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      background: ['#900000', '#009000', '#000090'],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      circular: true,
      interval: 1000,
      duration: 500,
      onChangeText: "",
      onAnimationFinishText: "",
      onTransitionText: ""
    },
    changeIndicatorDots: function (e) {
      console.log('indicatorDots', !this.data.indicatorDots)
      this.setData({
        indicatorDots: !this.data.indicatorDots
      });
    },
    changeAutoplay: function (e) {
      console.log('autoplay', !this.data.autoplay)
      this.setData({
        autoplay: !this.data.autoplay
      });
    },
    changeCircular: function (e) {
      console.log('circular', !this.data.circular)
      this.setData({
        circular: !this.data.circular
      });
    },
    changeVertical: function (e) {
      console.log('vertical', !this.data.vertical)
      this.setData({
        vertical: !this.data.vertical
      });
    },
    changeInterval: function (e) {
      this.setData({
        interval: parseInt(e.detail.value, 10)
      });
    },
    changeDuration: function (e) {
      this.setData({
        duration: parseInt(e.detail.value, 10)
      });
    },
    onChange(e){

      const { current, source } = e.detail

      this.setData({
        onChangeText: `current: ${current}, source: ${source}`
      })
    },
    onAnimationFinish(e){
      this.setData({
        onAnimationFinishText: `current: ${e.detail.current}`
      })
    },
    onTransition(e){
      this.setData({
        onTransitionText: `dx: ${e.detail.dx}, dy: ${e.detail.dy}`
      })
    }
  });