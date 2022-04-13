module.exports = app => {
// beforeStart是egg生命周期函数，启动时运行
  app.beforeStart(async function () {
    // 执行创建表的方法
    await app.model.sync({})
  })
}