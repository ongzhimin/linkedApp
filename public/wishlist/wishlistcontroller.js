linkedApp.controller('wishlistController', function ($scope, $firebase) {

    var ref = new Firebase("https://te-favourites.firebaseio.com/");
    var sync = $firebase(ref);
    $scope.items = sync.$asArray();
    var favouritesArray=[]
    var endDate
    var endTime

    $scope.items.$loaded(function(data) {
		$scope.items = sync.$asArray();
        for(var i=0;i<$scope.items.length;i++){

        }
        $scope.favourites=favouritesArray
    });

});

