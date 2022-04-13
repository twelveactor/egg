/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path')
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1649746915290_8940';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 数据库连接配置
  config.sequelize = {
    dialect: 'mysql',
    database: 'egg',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    timezone: '+08:00',
  }

  config.jwt = {
    // 密钥
    secret: "xiaozhoubaogao"
  }

  config.cors = {
    origin: "*", //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许跨域请求携带cookies凭证（credentials）
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  // 运行提交post,不用处理安全（security）验证
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // nunjucks 模板
  config.view = {
    defaultViewEngine: 'nunjucks'
  }

  // 前端部署的文件打包放入public,设置为访问的静态文件
  config.static = {
    prefix: '/',  //访问路径
    dir: path.join(appInfo.baseDir, 'app/public'),   //设置静态文件目录
  };
  return {
    ...config,
    ...userConfig,
  };
};
