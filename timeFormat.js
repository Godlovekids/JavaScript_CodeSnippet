//用法--TimeStream(1500614243, 'CN-YMD')
function TimeStream(timestamp, type) {
  let date = new Date(timestamp * 1000);
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let s = date.getSeconds();

  switch (type) {
      case 'YMD': //年-月-日
          return Y + '-' + M + '-' + D;
      case 'MD': //月-日
          return M + '-' + D;
      case 'MD_HM': //月-日
          return M + '-' + D + ' ' + h + ':' + m;
      case 'YMD_HMS': // 月-日 时：分：秒
          return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
      case 'CN_YMD': //x年x月x日
          return Y + '年' + M + '月' + D + '日';
      case 'CN_YMD_HM': //x年x月x日
          return Y + '年' + M + '月' + D + '日' + ' ' + h + ':' + m;
      case 'hm': // 时:分
          return h + ':' + m;
      case '-D': //天数差
          return Math.floor(((timestamp * 1000) - Date.parse(new Date())) / 1000 / 3600 / 24);
      case '-H': //小时差
          return Math.ceil((timestamp * 1000 - Date.parse(new Date())) / 1000 / 3600);
      default: //年-月-日 时:分
          return Y + '-' + M + '-' + D + ' ' + h + ':' + m;
  }
}

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

console.log(formatTime(new Date()));