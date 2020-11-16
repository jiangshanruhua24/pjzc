let obj = {
   setRem() {
      // console.log(111)
      // 设计稿宽度和设备宽度
      var uiW = 750,
         winW = document.documentElement.clientWidth,
         // 定义比例
         rate = winW / uiW;
      var oWrap = document.getElementById("app");
      // if(winW > uiW) {
      //     oWrap.style.width = uiW + "px";
      //     oWrap.style.margin = "0 auto";
      //     return;
      // }防止图片失真,但局限太大
      document.documentElement.style.fontSize = rate * 100 + "px";

   },
   // 另外一些公共方法
   formatTime(datetime) {
      // 把时间戳转成标准时间
      let date = new Date(datetime);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let year = date.getFullYear(),
         month = (date.getMonth() + 1),
         day = date.getDate(),
         // hour = ("0" + date.getHours()).slice(-2),
         // minute = ("0" + date.getMinutes()).slice(-2),
         // second = ("0" + date.getSeconds()).slice(-2);
         // 拼接
         // let result = year + "-" + month + "-" + sdate + " " + hour + ":" + minute + ":" + second;
         result = year + "-" + month + "-" + day;
      // 返回
      return result;
   }
}
export {
   obj
}