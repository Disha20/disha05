(function(){
	"use strict";

	angular
		.module('ngStars')
		


		.controller('loginCtrl',function($scope,loginFactory,$http,$window,$location,$mdDialog){
          loginFactory.getLogin().then(function(response){
          $scope.users = response.data;
           // $http.get('data/users.json').then(function(response){
           //     $scope.users = response.data;
             
              $scope.submit = function(){
               // $window.alert("dfghj");
                var uname = $scope.username;
               //  $window.alert($scope.username);
                  var pwd = $scope.password;
                 //  $window.alert(pwd);
                   for(var i=0;i<2;i++)
                   {
                     //$window.alert($scope.users[i].username);
                      if(uname == $scope.users[i].username && pwd == $scope.users[i].password)
                      {
                      //  $window.alert("login successful");
                         $location.path('/cards');
                      }
                      /*else
                      {
                        $window.alert("Username or Password is Incorrect.....");
                        
                      }*/
                   }
        }
        $scope.logIn = function(){
              $state.go('login');
            }

					})
  
         });
		 
})();




