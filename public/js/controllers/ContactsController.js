angular.module('contatooh').controller('ContactsController', 
	function($scope, $resource){		
		$scope.filter 	 = '';
		$scope.contacts  = [];	

		var Contact = $resource('/contatos');
		var fetchContatcs = function(){
			Contact.query(
				function(contacts){
					$scope.contacts = contacts;
				},
				function(error){
					console.log("Contacts not found");
					console.log(error);
				}
			);
		};

		$scope.init = function(){
			fetchContatcs();
		};

		$scope.init();	
	}
);