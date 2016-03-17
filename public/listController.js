/*var evaApp = angular.module('evaApp');*/

linkedApp.controller('listController', function($scope, $firebase) {

	var ref = new Firebase("https://te-app.firebaseio.com/");
	var sync = $firebase(ref);
	var searchArray=[]
	$scope.items = sync.$asArray();
	/*$scope.items.$loaded(function(data) {
		$scope.items = sync.$asArray();
	});
	*/
	$scope.search = function(){

		var searchTerm = angular.element('#search-term').text();
		console.log(searchTerm);

		searchArray=[];
		var search = searchTerm.toLowerCase();

		for(var i=0;i<$scope.items.length;i++){
			if($scope.items[i].PromotionTitle1.toLowerCase().indexOf(search)!=-1 || $scope.items[i].CopyText1.toLowerCase().indexOf(search)!=-1 || $scope.items[i].Category.toLowerCase().indexOf(search)!=-1|| $scope.items[i].Tags.toLowerCase().indexOf(search)!=-1){
				searchArray.push({ShopName:$scope.items[i].ShopName,PromotionTitle1:$scope.items[i].PromotionTitle1,TCText1:$scope.items[i].TCText1,End:new Date($scope.items[i].End*1000)})
			}
		}

		$scope.searchResult=searchArray;
	}
});

