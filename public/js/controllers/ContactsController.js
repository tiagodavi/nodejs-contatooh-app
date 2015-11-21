angular.module('contatooh').controller('ContactsController', 
	function($scope, Contact, Message){		
		
		$scope.filter 	 = '';
		$scope.contacts  = [];	
		$scope.message 	 = {text: ''};
		Message.setScope($scope.message);
				
		var fetchContatcs = function(){
			Contact.query(
				function(contacts){				
					$scope.contacts = contacts;
					Message.clean();
				},
				function(error){
					Message.set('Contacts not found', error);										
				}
			);
		};

		$scope.remove = function(contact){
			Contact.delete({id: contact._id},
				fetchContatcs,
				function(error){
					Message.set('Error in removing the contact', error);
				}
			);
		};

		$scope.init = function(){
			fetchContatcs();
		};

		$scope.init();	
	}
);