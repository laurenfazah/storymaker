angular.module('BSG').controller('AirplaneCtrl', function($scope, airplaneFactory) {
    'use strict';

	  $scope.name = airplaneFactory.name;
	  $scope.last_name = airplaneFactory.last_name;
	  $scope.color = airplaneFactory.color;

});