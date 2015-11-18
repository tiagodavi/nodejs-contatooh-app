module.exports = function(app) {
	var model = app.models.contato;
	var controller = {};
	var contatos = model.listaContatos();

	controller.listaContatos = function(req, res){
		res.json(contatos);
	};
	controller.obtemContato = function(req, res){
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){			
			return contato._id == idContato;
		});
		contato ? res.json(contato) : res.status(404).send('Contato não encontrato');		
	};
	controller.removeContato = function(req, res){
		var idContato = req.params.id;
		contatos = contatos.filter(function(contato){			
			return contato._id != idContato;
		});
		res.send(204).end();
	};
	return controller;
};

