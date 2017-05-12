(function(){
    "use strict";

    angular
        .module('ngStars')
        


        .controller('cardsctrl',function($scope,$mdBottomSheet,$http,$window,$mdDialog,$mdSidenav,$location){
            $http.get('data/star.json').then(function(response){
                  $scope.stars = response.data;
             $scope.products = [];
              $scope.openSidebar = function(){
                  $mdSidenav('left').open();   
            }
           $scope.closeSidebar = function(){
             $mdSidenav('left').close();  //becuase our md-component-id is left
          }

          function deleteStar(event, star){

          var confirm = $mdDialog.confirm()
                  .title('Are you sure to delelte ' + star.title + '?')
                  .ok('Yes')
                  .cancel('No')
                  .targetEvent(event);
                  console.log(star);
                  console.log($scope.stars);
          $mdDialog.show(confirm).then(function(){
            var index = $scope.stars.indexOf(star);
            console.log(vm.stars);
            console.log(index);
            $scope.stars.splice(index, 1);
          });
        
        }
        $scope.showToast = function(message) {
          $mdToast.show(
              $mdToast.simple()
                .content(message)
                .position('top, right')
                .hideDelay(3000)
            );
        }
         
        $scope.showDialog = function() {
          //$window.alert("fvgn");
        $scope.alert = '';
        $mdBottomSheet.show({
          templateUrl: 'components/dialog/dialog.html',
          controller: 'dialogctrl'
        })

      };


       $scope.logout = function(){
           $location.path('/login');
       }
          $scope.saveItem = function(isValid,star) {
           // $window.alert("xcvb");
            // check to make sure the form is completely valid
            if (isValid) {
             $window.alert('our form is amazing');
              $scope.stars.push(star);
              $scope.star = {};
              $scope.closeSidebar();
            }

          };
        $scope.buyProduct = function(star){

           
            var a = $scope.stars.indexOf(star);

        //  $window.alert(a);
          // $scope.errortext = "";
          $scope.products.push({"tsk":$scope.stars[a].title});
          
           // $scope.$broadcast(a);
           // return _.uniq( $scope.products);
          }
          $scope.remove = function(y) {
      
    
          $scope.products.splice($scope.products.indexOf(y),1);  
             
       }
         //if (!$scope.addMe) {return;}
        // $window.alert(a);
       /* if (a == -1) {
            $scope.products.push({"tsk":$scope.stars[a].title});
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }*/
   //   }
          /*$scope.openDialog = function(){
                  $mdDialog('left').open();   
            }*/
    
          
    



                });


        })
            

         
})();

