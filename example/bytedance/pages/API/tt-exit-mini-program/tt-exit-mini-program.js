Page({
  exitMiniProgram() {
    tt.exitMiniProgram({
      success: () => {
        console.log("exited");
      },
      fail: e => {
        console.log(e, "fail");
      },
      complete: () => {
        console.log("complete");
      }
    });
  }

});