angular.module('BSG').controller('AirplaneCtrl', function($scope, airplaneFactory) {
    'use strict';
  $scope.user = airplaneFactory.user;

	var updateFactory = function() {
	    
	    airplaneFactory.setData($scope.name, $scope.last_name, $scope.color);
	}

}); 