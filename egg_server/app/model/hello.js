// 模型
module.exports = app => {
  // 引入数据模型
  const {STRING} = app.Sequelize;

  // 创建表
  const hello = app.model.define('hello', {
    // 定义字段
    msg: STRING
  })

  return hello
}