var express = require('express');
var home = require('./app/routes/home');

module.exports = function() {
	var app = express();
	app.set('port', 3000);
	app.use(express.static('./public'));
	app.use('view engine', 'ejs');
	app.use('views', './app/views');		
	home(app);
	return app;
}; 

