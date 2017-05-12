(function(){

	"use strict";

	angular
		.module('ngStars')
		.factory('cardsFactory', function($http){

			 function getCards(){
			 	return $http.get('data/star.json');
			 }

			 return {
			 	getCards: getCards
			 }

		});

})();


