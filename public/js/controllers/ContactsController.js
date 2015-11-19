angular.module('contatooh').controller('ContactsController', 
	function($scope, $resource){		
		$scope.filter 	 = '';
		$scope.contacts  = [];	
		$scope.message 	 = {text: ''}

		var Contact = $resource('/contatos/:id');
		var Message = {			
			set: function(text){
				$scope.message.text = text;
			},
			clean: function(){
				$scope.message.text = '';
			}
		};
		var fetchContatcs = function(){
			Contact.query(
				function(contacts){				
					$scope.contacts = contacts;
					Message.clean();
				},
				function(error){
					Message.set('Contacts not found');
					console.log(error);												
				}
			);
		};

		$scope.remove = function(contact){
			Contact.delete({id: contact._id},
				fetchContatcs,
				function(error){
					Message.set('Error in removing the contact');
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