angular.module('BSG').controller('BeachPromptsCtrl', function($scope, beachFactory) {
    'use strict';

	function updateFactory() {
	    beachFactory.setData($scope.name, $scope.fav_food, $scope.ice_cream_flavor);
	}

});