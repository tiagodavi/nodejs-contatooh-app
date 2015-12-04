module.exports = function(app) {
	var controller = app.controllers.contact;

	app.route('/contacts')
	   .get(controller.findAll)	   	 
	   .post(controller.save);

	app.route('/contacts/:id')
	   .get(controller.findOne)
	   .delete(controller.remove);
};