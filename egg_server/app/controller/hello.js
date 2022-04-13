// 引入egg的控制器类
const Controller = require('egg').Controller;

class HelloController extends Controller {
  async index() {
    // 拿到 service 从数据库拿到的数据
    let result = await this.ctx.service.hello.getMessage();

    if (result) {
      this.ctx.body = {
        code: 20000,
        data: result
      }
    } else {
      this.ctx.body = {
        code: 50000,
        data: "数据获取失败，请与管理员联系！"
      }
    }


  }
}

module.exports = HelloController