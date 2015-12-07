var mongoose = require('mongoose')

module.exports = uri => {
	mongoose.set('debug', true)
	mongoose.connect(uri, { server: { poolSize: 15 }})

	mongoose.connection.on('connected', () => {
		console.log('Mongoose Connected on ' + uri)
	})

	mongoose.connection.on('disconnected', () => {
		console.log('Mongoose Disconnected of ' + uri)
	})

	mongoose.connection.on('error', error => {
		console.log('Mongoose Error: ' + error)
	})

	process.on('SIGINT', () => {
		mongoose.connection.close(() => {
			console.log('Mongoose! Close Connection');
			process.exit(0);
		})
	})
}