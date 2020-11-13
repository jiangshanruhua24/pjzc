module.exports={
    devServer:{
        proxy: {
            "/api": {
              target: "http://192.168.1.12:30001",
              pathRewrite: {"^/api" : ""}
            }
          }
    }
}