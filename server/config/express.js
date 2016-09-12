var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

module.exports = function(app, config) {
  app.set('views', config.rootPath + 'views');
  app.set('view engine', 'jade');

	app.use(express.static(__dirname + '/../../'));
};
