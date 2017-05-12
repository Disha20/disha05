angular
    .module('ngStars', ['ngMaterial','ui.router'])
    .config(function($mdThemingProvider, $stateProvider){


        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange');

        $stateProvider
            .state('stars', {
                url:'/',
                templateUrl:'/components/stars.tpl.html',
                controller: 'starsCtrl'
                
        })
            .state('login', {
                url:'/login',
                templateUrl:'/components/login/stars.login.tpl.html',
                controller:'loginCtrl'
            })
            .state('cards',{
                url:'/cards',
                templateUrl:'/components/cards/stars.cards.tpl.html',
                controller:'cardsctrl'
                
            });
            /*.state('dialog',{
                url:'/dialog',
                templateUrl:'/components/dialog/dialog.html',
                controller:'dialogctrl'
                
            });*/



    })
