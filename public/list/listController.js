/*var evaApp = angular.module('evaApp');*/

linkedApp.controller('listController', function($scope, $firebase, $window, $location) {

	var ref = new Firebase("https://te-app.firebaseio.com/");
	var sync = $firebase(ref);
	var searchArray=[]
	$scope.items = sync.$asArray();
	/*$scope.items.$loaded(function(data) {
		$scope.items = sync.$asArray();
	});
	*/
	$scope.search = function(){

		/*var searchTerm = document.getElementById('search-term').text();*/
		var searchTerm = angular.element('#search-term').val();
		console.log(searchTerm);

		searchArrayEven = [];
		searchArrayOdd = [];
		var search = searchTerm.toLowerCase();

		for(var i=0;i<$scope.items.length;i++){

			if($scope.items[i].PromotionTitle1.toLowerCase().indexOf(search)!=-1 || $scope.items[i].CopyText1.toLowerCase().indexOf(search)!=-1 || $scope.items[i].Category.toLowerCase().indexOf(search)!=-1|| $scope.items[i].Tags.toLowerCase().indexOf(search)!=-1){
				
				if(i % 2 == 0){
				  searchArrayEven.push({ShopName:$scope.items[i].ShopName,PromotionTitle1:$scope.items[i].PromotionTitle1,TCText1:$scope.items[i].TCText1,End:new Date($scope.items[i].End*1000)})
				} else {
				  searchArrayOdd.push({ShopName:$scope.items[i].ShopName,PromotionTitle1:$scope.items[i].PromotionTitle1,TCText1:$scope.items[i].TCText1,End:new Date($scope.items[i].End*1000)})
				}
			}
		}

		$scope.searchResultEven=searchArrayEven;
		$scope.searchResultOdd=searchArrayOdd;
	}

	$scope.goProductDetails = function(item) {

		$window.sessionStorage.shopName = item.ShopName;
		$window.sessionStorage.promoTitle = item.PromotionTitle1;
		$window.sessionStorage.terms = item.TCText1;
		$window.sessionStorage.endDate = item.End;

		$location.path("/product");
	};
});

