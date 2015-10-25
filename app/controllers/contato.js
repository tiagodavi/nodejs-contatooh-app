module.exports = function(app) {
	var model = app.models.contato;
	var controller = {};
	controller.listaContatos = function(req, res){
		res.json(model.listaContatos());
	};
	return controller;
};

