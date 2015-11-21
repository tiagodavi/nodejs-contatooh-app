angular.module('contatooh').controller('ContactController', 
	function($scope, $routeParams, Contact, Message){

		$scope.contact = new Contact();
		$scope.message = {text: ''};
		Message.setScope($scope.message);

		$scope.save = function(){
			$scope.contact.$save()
			.then(function(){		
				$scope.contact = new Contact();	
				Message.set('Contact has been saved successfully');
			})
			.catch(function(error){				
				Message.set('It could not save the contact', error);
			});			
		};	
			
		if($routeParams.id){
			Contact.get({id: $routeParams.id},
				function(contact){				
					$scope.contact = contact;
				},
				function(error){
					Message.set('Contact not found', error);				
				}
			);
		}		
	}
);