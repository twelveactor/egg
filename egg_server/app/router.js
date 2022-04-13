'use strict';

// 导入 token 中间件验证
const checktoken = require("./middleware/checktoken");
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app;
  router.get('/', controller.home.index);

  // 前端拿数据库数据
  router.get('/hello', checktoken(), controller.hello.index)
  // 登录之后才能拿到hello数据和token
  router.post('/login', controller.login.login)
};
