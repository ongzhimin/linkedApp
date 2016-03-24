/*var evaApp = angular.module('evaApp');*/

linkedApp.controller('merchantController', function ($scope, $window, $firebase) {


    var ref = new Firebase("https://te-merchant.firebaseio.com/");
    var sync = $firebase(ref);
    var shop = {};
    var locationArray=[];
    var addressArray = [];
    $scope.items = sync.$asArray();
    
    $scope.items.$loaded(function(data) {
        $scope.items = sync.$asArray();
        var name = $window.sessionStorage.shopName;
        $scope.getshop(name);
    });

    $scope.getshop = function (name) {
        var search = name.toLowerCase();
        console.log(search);
        for (var i = 0; i < $scope.items.length; i++) {
            console.log($scope.items[i]);
            if ($scope.items[i].ShopName.toLowerCase() == search) {

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

        $scope.shopdetails = shop;
        $scope.locations = locationArray;

        console.log($scope.shopdetails);
        console.log($scope.locations);
        
        for (var j = 0; j < $scope.locations.length; j++) {
            var tempArray = $scope.locations[j].split('+');
            addressArray.push({
                Mall: tempArray[0],
                Address: tempArray[1]
            })
        }
        $scope.addresses = addressArray
    }

});

