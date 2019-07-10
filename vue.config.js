// 定制vant主题色
const Vars = require('./variables');

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: Vars   // 更改vant默认的varrables
      }
    }
  }
}