angular.module('BSG').controller('SisterPromptsCtrl', function($scope, sisterFactory) {
    'use strict';

	function updateFactory() {
	    sisterFactory.setData($scope.name, $scope.fav_toy, $scope.brother_or_sister);
	}

});