module.exports = function(app) {
	var model 		= app.models.contato;
	var controller 	= {};
	var contatos 	= model.listaContatos();
	var CONTATO_ID 	= 5;
	var adiciona	= function(contato){
		contato._id = ++CONTATO_ID;
		contatos.push(contato);
		return contato;
	};
	var atualiza = function(contato){
		contatos = contatos.map(function(contatoExistente){
			if(contatoExistente._id == contato._id){
				contatoExistente = contato;
			}
			return contatoExistente;
		});
		return contato;		
	};

	controller.listaContatos = function(req, res){
		res.json(contatos);
	};
	controller.obtemContato = function(req, res){
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){			
			return contato._id == idContato;
		});
		contato[0] ? res.json(contato[0]) : res.status(404).send('Contato não encontrato');		
	};
	controller.removeContato = function(req, res){
		var idContato = req.params.id;
		contatos = contatos.filter(function(contato){			
			return contato._id != idContato;
		});
		res.send(204).end();
	};
	controller.salvaContato = function(req, res) {
		var contato = req.body;		
		contato = contato._id ?
			atualiza(contato) :
			adiciona(contato);
		res.json(contato);
	};
	return controller;
};

