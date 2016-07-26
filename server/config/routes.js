module.exports = function(app, config) {
  	app.all('/*', function(request, response, next) {
    	console.log('roothpath', config.rootPath);
    	response.sendFile('index.html', { root: config.rootPath });
  	});
};