angular.module('contatooh').factory('Contact', function($resource){
	return $resource('contatos/:id');
});