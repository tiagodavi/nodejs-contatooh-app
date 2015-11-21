angular.module('contatooh').controller('ContactController', 
	function($scope, $routeParams, $resource){

		var Contact = $resource('contatos/:id');

		Contact.get({id: $routeParams.id},
			function(contact){				
				$scope.contact = contact;
			},
			function(error){
				$scope.message = {
					text: 'Contact not found'
				};
				console.log(error);
			}
		);
	}
);