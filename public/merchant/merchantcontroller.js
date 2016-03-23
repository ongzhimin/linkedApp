/*var evaApp = angular.module('evaApp');*/

linkedApp.controller('merchantController', function ($scope, $firebase) {

    var ref = new Firebase("https://te-merchant.firebaseio.com/");
    var sync = $firebase(ref);
    var shop = {};
    var locationArray=[];
    var addressArray = [];
    $scope.items = sync.$asArray();

    $scope.getshop = function (shopname) {
        var search = shopname.toLowerCase();
        //var search="Mcdonalds".toLowerCase();
        for (var i = 0; i < $scope.items.length; i++) {
            if ($scope.items[i].ShopName.toLowerCase()== search) {
                shop = {
                    ShopName: $scope.items[i].ShopName,
                    Image: $scope.items[i].Image,
                    Location: $scope.items[i].Location,
                    Website: $scope.items[i].Website,
                    ContactNumber: $scope.items[i].ContactNumber
                }
                locationArray = $scope.items[i].Location.split(',');
            }
        }
        $scope.shopdetails = shop
        $scope.locations = locationArray
        for (var j = 0; j < $scope.locations.length; j++) {
            var tempArray = $scope.locations[j].split('+');
            addressArray.push({
                Mall: tempArray[0],
                Address: tempArray[1]
            })
        }
        $scope.addresses = addressArray
        //console.log($scope.shopdetails)
        //console.log($scope.locations)
        //console.log($scope.addresses)
    }
});

