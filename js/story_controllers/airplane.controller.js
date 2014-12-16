angular.module('BSG').controller('AirplaneCtrl', function($scope, airplaneFactory) {
    'use strict';

	function updateFactory() {
	    airplaneFactory.setData($scope.name, $scope.last_name, $scope.color);
	}

});