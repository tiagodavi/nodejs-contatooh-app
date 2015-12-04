var mongoose = require('mongoose');

module.exports = function(uri){
	mongoose.set('debug', true);
	mongoose.connect(uri, { server: { poolSize: 15 }});

	mongoose.connection.on('connected', function(){
		console.log('Mongoose Connected on ' + uri);
	});

	mongoose.connection.on('disconnected', function(){
		console.log('Mongoose Disconnected of ' + uri);
	});

	mongoose.connection.on('error', function(error){
		console.log('Mongoose Error: ' + error);
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Mongoose! Close Connection');
			process.exit(0);
		});
	});
};