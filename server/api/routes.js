module.exports = function(app, config) {
console.log('rrrr');
  app.get('/users', function(req, res) {
    var hello = { message : 'Hello' };
    res.send(JSON.stringify(hello));
  });
};
