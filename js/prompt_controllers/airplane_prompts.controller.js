angular.module('BSG').controller('AirplanePromptsCtrl', ['$scope', 'airplaneFactory', function($scope, airplaneFactory) {
    'use strict';

	function updateFactory(name, last_name, color) {
	    airplaneFactory.setData($scope.name, $scope.last_name, $scope.color);
	}

	function submit(name, last_name, color) {
	    airplaneFactory.setData($scope.name, $scope.last_name, $scope.color);
	}

}]);