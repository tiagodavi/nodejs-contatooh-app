angular.module('contatooh').controller('ContactsController', 
	function($scope){
		$scope.total = 0;
		$scope.increment = function(){
			$scope.total++;
		};
		$scope.filter = '';
		$scope.contacts = 
		[
			{
				"_id": 1,
				"name": "Fabio",
				"email": "oi@empresa.com.br"
			},
			{
				"_id": 2,
				"name": "Jose",
				"email": "embratel@empresa.com.br"
			},
			{
				"_id": 3,
				"name": "Fernanda",
				"email": "tim@empresa.com.br"
			}
		];
	}
);