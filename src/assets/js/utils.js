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
}
export {
    obj
}