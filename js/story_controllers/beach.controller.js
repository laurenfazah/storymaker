angular.module('BSG').controller('BeachCtrl', function($scope, beachFactory) {
    'use strict';
  $scope.user = beachFactory.user;

	var updateFactory = function() {
	    
	    beachFactory.setData($scope.name, $scope.fav_food, $scope.ice_cream_flavor);
	}

}); 