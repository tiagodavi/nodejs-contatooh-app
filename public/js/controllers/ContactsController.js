angular.module('contatooh').controller('ContactsController', 
	function($scope, $http){		
		$scope.filter 	 = '';
		$scope.contacts  = [];		
		
		$http.get('/contatos')
		.success(function(data){
			$scope.contacts = data;
		})
		.error(function(statusText){
			console.log("Contacts not found");
			console.log(statusText);
		});
	}
);