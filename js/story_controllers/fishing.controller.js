angular.module('BSG').controller('FishingCtrl', function($scope, fishingFactory) {
    'use strict';
  $scope.user = fishingFactory.user;

	var updateFactory = function() {
	    
	    fishingFactory.setData($scope.name, $scope.fav_color, $scope.imaginary_pet_name);
	}

}); 