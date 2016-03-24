linkedApp.controller('wishlistController', function ($scope, $firebase) {

    var ref = new Firebase("https://te-favourites.firebaseio.com/");
    var sync = $firebase(ref);
    $scope.items = sync.$asArray();
    var favouritesArray=[]

    $scope.items.$loaded(function(data) {
        for(var i=0;i<$scope.items.length;i++){
            favouritesArray.push({ShopName:$scope.items[i].ShopName,PromotionTitle1:$scope.items[i].PromotionTitle1,TCText1:$scope.items[i].TCText1,End:new Date($scope.items[i].End*1000),Image:$scope.items[i].Image})
        }
        $scope.favourites=favouritesArray
    });

});

