var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

module.exports = function(app, config) {
  app.set('views', config.rootPath + 'views');
  app.set('view engine', 'jade');
	app.use('/', express.static(config.rootPath));
	app.use(express.static(__dirname + '/../../'));

  //CORS middleware
var allowCrossDomain = function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(allowCrossDomain);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
};
