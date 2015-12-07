var http = require('http')
var app  = require('./config/express')()
require('./config/passport')()
require('./config/database.js')('mongodb://localhost/contatooh')

http.createServer(app).listen(app.get('port'), () => {
	console.log('Express Server listening on port ' + app.get('port'))
})
