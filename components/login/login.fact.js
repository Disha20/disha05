(function(){

	"use strict";

	angular
		.module('ngStars')
		.factory('loginFactory', function($http){

			 function getLogin(){
			 	return $http.get('data/users.json');
			 }

			 return {
			 	getLogin: getLogin
			 }

		});

})();