var path = require('path');
var rootPath = path.normalize(__dirname + '/../../public/');

module.exports = {
  development: {
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
};
