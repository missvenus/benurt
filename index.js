// This is the main file of our chat app. It initializes a new 
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node app.js' in your terminal
company_name = "VBSAA"

var express = require('express'),
	app = express();

var fs = require('fs');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// This is needed if the app is run on heroku:

var port = process.env.PORT || 8081;

 // Set .html as the default template extension
	app.set('view engine', 'html');

	// Initialize the ejs template engine
	app.engine('html', require('ejs').renderFile);

	// Tell express where it can find the templates
	app.set('views', __dirname + '/views');

	// Make the files in the public folder available to the world
	app.use('/public',express.static(__dirname + '/public'));
	

	app.get('/', function(req, res){

		// Render views/home.html
		res.render('home');
	});


fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

app.listen(port);

console.log('Your application is running on http://localhost:' + port);
