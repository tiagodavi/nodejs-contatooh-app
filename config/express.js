var express = require('express');
var home = require('../app/routes/home');

module.exports = function() {
	var app = express();

	app.set('port', 3000);	
	app.set('view engine', 'ejs');
  	app.set('views','./app/views');	

	app.use(express.static('./public'));
	
	home(app);
	
	return app;
}; 

