var qs = require('querystring');
var AM = require('../modals/account_manager');
module.exports.controller = function(app) {

/**
 * a home page route
 */
  app.get('/create', function(req, res) {
      // any logic goes here
      res.render('login')
  });

/**
 * About page route
 */
  app.get('/login', function(req, res) {
      // any logic goes here
      res.render('users/login')
  });

 app.post('/create', function(req, res){

    if(req.body.user === ('venus'))
		   res.render('addEmployee')
	  else
		   res.render('login')
/*
  AM.manualLogin(req.body['user'], req.body['pass'], function(e, o){
      if (!o){
        res.status(400).send(e);
      } else{
        res.render('addEmployee');
      }
    });
  */

});


  
/*
 app.post('/create', function(req, res){
 	var body = '';
 	var params = {};
  	req.on('data', function(chunk) {
      body += chunk;
    });

    req.on('end', function() {
      var data = qs.parse(body);
      data=JSON.stringify(data);
      params= JSON.parse(data)
      console.log(params.user)
    if(params.user === ('venus'))
		res.render('home')
	else
		res.render('login')
    });


});
*/

};