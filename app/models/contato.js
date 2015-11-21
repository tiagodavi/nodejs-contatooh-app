module.exports = function(){	
	var model = {};
	model.listaContatos = function(){
		var contatos = [];
		for(var i=1; i<=5; i++){
			contatos.push({_id: i, name: 'Contato Exemplo '+i,email: 'cont'+i+'@empresa.com.br'});
		};
		return contatos;
	};
	return model;
};