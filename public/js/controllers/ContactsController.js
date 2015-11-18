angular.module('contatooh').controller('ContactsController', 
	function($scope, $resource){		
		$scope.filter 	 = '';
		$scope.contacts  = [];	

		var Contact = $resource('/contatos/:id');
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

		$scope.remove = function(contact){
			Contact.delete({id: contact._id},
				fetchContatcs,
				function(error){
					console.log('Error in removing the contact');
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