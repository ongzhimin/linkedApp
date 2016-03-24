linkedApp.controller('productController', function($scope, $window, $location) {
	
	$scope.shopName = $window.sessionStorage.shopName
	$scope.promoTitle = $window.sessionStorage.promoTitle;
	$scope.terms = $window.sessionStorage.terms;
	$scope.endDate = $window.sessionStorage.endDate;

	
	$scope.goMerchant = function(shopName) {
		
		shopName = $window.sessionStorage.shopName;
		$location.path("/merchant");
	};

});
