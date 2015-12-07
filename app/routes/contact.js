var isAuthenticated = require('../../config/auth');

module.exports = app => {
	var controller = app.controllers.contact

	app.route('/contacts')
	   .get(isAuthenticated, controller.findAll)	   	 
	   .post(isAuthenticated, controller.save)

	app.route('/contacts/:id')
	   .get(isAuthenticated, controller.findOne)
	   .delete(isAuthenticated, controller.remove)
}