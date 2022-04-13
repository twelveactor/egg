// 引入egg的控制器类
const Controller = require("egg").Controller;

class loginController extends Controller {
  // 用户登录
  async login() {
    try {
      // 获取用户的请求
      let username = this.ctx.request.body.username;
      // 生成，通过用户名来做token , 并通过app.config.jwt.secret拿到密钥做加密
      let token = this.ctx.app.jwt.sign(
        {
          username
        },
        this.ctx.app.config.jwt.secret
      );

      // 成功直接返回token
      this.ctx.body = {
        code: 20000,
        token
      };
    } catch (e) {
      this.ctx.body = {
        code: 40000,
        msg: "登录失败",
      };
    }
  }
}

module.exports = loginController;
