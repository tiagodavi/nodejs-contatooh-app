module.exports = function(app) {
	var model = app.models.contato;
	var controller = {};
	controller.listaContatos = function(req, res){
		res.json(model.listaContatos());
	};
	controller.obtemContato = function(req, res){
		var idContato = req.params.id;
		var contato = model.listaContatos().filter(function(contato){			
			return contato._id == idContato;
		});
		contato ? res.json(contato) : res.status(404).send('Contato não encontrato');		
	};
	return controller;
};

