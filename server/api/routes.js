module.exports = function(app, config) {

  //jade partials request
  app.get('/users', function(req, res) {

    var hello = {message:'Hello'};
    res.send(JSON.stringify(hello));


    //get mongo stuff


  });


};
