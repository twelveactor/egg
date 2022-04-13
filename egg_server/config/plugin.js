'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 处理数据库连接
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  // 处理跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // token密钥
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  // nunjucks 模板
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  }
};
