angular.module('contatooh').controller('ContactController', 
	function($scope, $routeParams, $resource){

		var Contact = $resource('contatos/:id');

		$scope.contact = new Contact();
		$scope.message = {text: ''};

		$scope.save = function(){
			$scope.contact.$save()
			.then(function(){		
				$scope.contact = new Contact();		
				$scope.message = {text: 'Contact has been saved successfully'};
			})
			.catch(function(error){
				$scope.message = {text: 'It could not save the contact'};
				console.log(error);
			});			
		};	
			
		if($routeParams.id){
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
	}
);