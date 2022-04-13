// 中间件，验证token
function checktoken() {
  return async function (ctx, next) {
    try {
      // 验证token, 一般在前端的请求头中
      let token = ctx.header.token;
      // 校验token
      ctx.app.jwt.verify(token, ctx.app.config.secret);
      // 验证没问题直接跳转即可
      await next();
    } catch (e) {
      ctx.body = {
        code: 40000,
        msg: "token验证失败，请检查是否添加token"
      }
    }
  };
}

module.exports = checktoken
