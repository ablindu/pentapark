var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

module.exports = function(app, config) {
	app.use('/public', express.static(config.rootPath));
  app.use('/bower_components', express.static(config.bower_components));
  app.use('/.tmp', express.static(config.css));

	app.use(cookieParser());

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
};
