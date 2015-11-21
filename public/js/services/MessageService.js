angular.module('contatooh').factory('Message', function(){
	
	var $_scope = {text: ''};

	var Message = {		
		setScope: function(scope){
			$_scope = scope || $_scope;
		},	
		set: function(text, log){
			$_scope.text = text;
			if(log){
				console.log(log);
			};
		},
		clean: function(){
			$_scope.text = '';
		}
	};

	return Message;
});