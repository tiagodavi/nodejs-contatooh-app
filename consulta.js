var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('565399d2d8289f2c2cce8ac4');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh', 
	function(erro, db){
		if(erro) throw erro;
		db.collection('contacts').findOne({_id: _idProcurado},
			function(erro, contato){
				if(erro) throw erro;
				console.log(contato);
			}
		);	
	}
);
