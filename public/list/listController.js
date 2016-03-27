/*var evaApp = angular.module('evaApp');*/

linkedApp.controller('listController', function($scope, $firebase, $window, $location) {

	var ref = new Firebase("https://te-app.firebaseio.com/");
	var sync = $firebase(ref);
	var searchArray=[]
	$scope.items = sync.$asArray();

	$scope.items.$loaded(function(data) {
		$scope.items = sync.$asArray();
		$scope.init();
	});
	
	$scope.init = function(){

		var searchTerm = angular.element('#search-term').val();

		searchArrayEven = [];
		searchArrayOdd = [];
		var search = searchTerm.toLowerCase();
		var counter = 0;

		for(var i=0;i<$scope.items.length;i++){

			
			if($scope.items[i].PromotionTitle1.toLowerCase().indexOf(search)!=-1 || $scope.items[i].CopyText1.toLowerCase().indexOf(search)!=-1 || $scope.items[i].Category.toLowerCase().indexOf(search)!=-1|| $scope.items[i].Tags.toLowerCase().indexOf(search)!=-1){
				console.log($scope.items[i]);
				if(counter % 2 == 0){
					console.log("even" + i);
					searchArrayEven.push({ShopName:$scope.items[i].ShopName,PromotionTitle1:$scope.items[i].PromotionTitle1,TCText1:$scope.items[i].TCText1,End:new Date($scope.items[i].End*1000),Image:$scope.items[i].Image})
				} else {
					console.log("odd" + i);
					searchArrayOdd.push({ShopName:$scope.items[i].ShopName,PromotionTitle1:$scope.items[i].PromotionTitle1,TCText1:$scope.items[i].TCText1,End:new Date($scope.items[i].End*1000),Image:$scope.items[i].Image})
				}

				counter++;
			}
		}

		$scope.searchResultEven=searchArrayEven;
		$scope.searchResultOdd=searchArrayOdd;
	}

	

	$scope.search = function(){

		/*var searchTerm = document.getElementById('search-term').text();*/
		var searchTerm = angular.element('#search-term').val();
		console.log(searchTerm);

		searchArrayEven = [];
		searchArrayOdd = [];
		var search = searchTerm.toLowerCase();
		var counter = 0;

		for(var i=0;i<$scope.items.length;i++){

			
			if($scope.items[i].PromotionTitle1.toLowerCase().indexOf(search)!=-1 || $scope.items[i].CopyText1.toLowerCase().indexOf(search)!=-1 || $scope.items[i].Category.toLowerCase().indexOf(search)!=-1|| $scope.items[i].Tags.toLowerCase().indexOf(search)!=-1){
				
				console.log($scope.items[i]);
				if(counter % 2 == 0){
					console.log("even" + i);
					searchArrayEven.push({ShopName:$scope.items[i].ShopName,PromotionTitle1:$scope.items[i].PromotionTitle1,TCText1:$scope.items[i].TCText1,End:new Date($scope.items[i].End*1000),Image:$scope.items[i].Image})
				} else {
					console.log("odd" + i);
					searchArrayOdd.push({ShopName:$scope.items[i].ShopName,PromotionTitle1:$scope.items[i].PromotionTitle1,TCText1:$scope.items[i].TCText1,End:new Date($scope.items[i].End*1000),Image:$scope.items[i].Image})
				}

				counter++;
			}
		}

		$scope.searchResultEven=searchArrayEven;
		$scope.searchResultOdd=searchArrayOdd;
	}

	$scope.goProductDetails = function(item) {

		/*$window.sessionStorage.item = item;*/
		$window.sessionStorage.shopName = item.ShopName;
		$window.sessionStorage.promoTitle = item.PromotionTitle1;
		$window.sessionStorage.terms = item.TCText1;
		$window.sessionStorage.endDate = new Date(item.End).toString().split('G')[0];
		$window.sessionStorage.image = item.Image;


		$location.path("/product");
	};

	/*$scope.timeConverter(time){
	  var a = new Date(time * 1000);
	  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  var year = a.getFullYear();
	  var month = months[a.getMonth()];
	  var date = a.getDate();

	  var time = date + ' ' + month + ' ' + year;
	  return time;
	}*/
});

