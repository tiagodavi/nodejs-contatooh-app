angular.module('contatooh', ['ngRoute', 'ngResource'])
.config(function($routeProvider){
	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contacts.html',
		controller: 'ContactsController'
	});
	$routeProvider.when('/contato/:id', {
		templateUrl: 'partials/contact.html',
		controller: 'ContactController'
	});
	$routeProvider.otherwise({redirectTo: '/contatos'});
});