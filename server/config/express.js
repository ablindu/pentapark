var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

module.exports = function(app, config) {
	app.use('/public', express.static(config.rootPath));

	app.use(cookieParser());
	
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
};