module.exports = function(app, config) {
    app.all('/*', function(request, response, next) {
      console.log('roothpath', config.rootPath);
      response.sendFile('index.jade', { root: config.rootPath });
  	});

    app.get('*',function(req, res){
      res.render('index');
    });
};
