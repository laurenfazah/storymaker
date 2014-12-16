angular.module('BSG').controller('AirplanePromptsCtrl', function($scope, airplaneFactory) {
    'use strict';

	function updateFactory() {
	    airplaneFactory.setData($scope.name, $scope.last_name, $scope.color);
	}

});