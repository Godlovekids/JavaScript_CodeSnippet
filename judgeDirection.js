class MyTools {
  constructor(x,y){
    this.x = x;  
        this.y = y; 
  }
  swipe(callback = null) {
    // 记录手指按下的坐标
    var startX, startY;
    // 记录手指按下的时间
    var startTime;

    window.addEventListener("touchstart", function (e) {
      // 判断手指的个数
      if (e.targetTouches.length > 1) {
        return;
      }

      // 记录手指按下的坐标
      startX = e.targetTouches[0].clientX;
      startY = e.targetTouches[0].clientY;

      // 记录手指按下的时间
      startTime = Date.now();
    });
    window.addEventListener("touchend", function (e) {
      // 判断手指的个数
      if (e.changedTouches.length > 1) {
        return;
      }

      // 获取手指松开的坐标
      var endX = e.changedTouches[0].clientX;
      var endY = e.changedTouches[0].clientY;
      // 获取手指松开的时间
      var endTime = Date.now();
      // 方向
      var direction;
      // 判断距离  水平距离
      if (Math.abs(endX - startX) > 15) {
        // 判断方向 水平
        direction = endX > startX ? "right" : "left";
      } else if (Math.abs(endY - startY) > 5) {
        // 判断方向 竖直方向
        direction = endY > startY ? "down" : "up";
      } else {
        return;
      }

      // 判断时间
      if (endTime - startTime > 500) {
        return;
      }

      // 执行自己的逻辑
      // console.log(direction);
      if (callback) {
        callback(direction);
      }
    });
  }
}