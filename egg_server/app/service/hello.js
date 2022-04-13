// 拿到数据库的数据

const Service = require("egg").Service;

class HelloService extends Service {
  async getMessage() {
    try {
      // 拿数据库数据
      return await this.app.model.Hello.findAll();
    } catch (e) {
      return e;
    }
  }
}

module.exports = HelloService;
