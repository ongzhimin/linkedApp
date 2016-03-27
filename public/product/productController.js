linkedApp.controller('productController', function($scope, $window, $location, $firebase) {
	
	/*$scope.item = $window.sessionStorage.item;*/
	$scope.shopName = $window.sessionStorage.shopName
	$scope.promoTitle = $window.sessionStorage.promoTitle;
	$scope.terms = $window.sessionStorage.terms;
	$scope.endDate = $window.sessionStorage.endDate;
	$scope.image = $window.sessionStorage.image;

	var ref = new Firebase("https://te-favourites.firebaseio.com/");
	var sync = $firebase(ref);
	$scope.activity = sync.$asArray();
	var total = 0;

	$scope.goMerchant = function(shopName) {

		shopName = $window.sessionStorage.shopName;
		$location.path("/merchant");
	};

	$scope.addFavourites = function(){
		$scope.activity.$add({
			ShopName: $scope.shopName,
			PromotionTitle1: $scope.promoTitle,
			TCText1: $scope.terms,
			End: $scope.endDate,	//use unix time
			Image: $scope.image
		});

		var heart = angular.element('#fav-heart');
		heart.css("color", "#ff5b57");
	};
	
});
