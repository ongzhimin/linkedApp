var linkedApp = angular.module('linkedApp', ['ngRoute']);

linkedApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '../list.html',
            controller  : 'mainController'
        })

        // route for the product page
        .when('/product', {
            templateUrl : '../product.html',
            controller  : 'productController'
        })
        .when('/merchant', {
            templateUrl : '../merchant.html',
            controller  : 'merchantController'
        })
        .when('/wishlist', {
            templateUrl : '../wishlist.html',
            controller  : 'wishlistController'
        })

        .when('/profile', {
            templateUrl : '../profile.html',
            controller  : 'profileController'
        })
});

// create the controller and inject Angular's $scope
linkedApp.controller('mainController', function($scope) {

});

linkedApp.controller('productController', function($scope) {

});

linkedApp.controller('profileController', function($scope) {

});