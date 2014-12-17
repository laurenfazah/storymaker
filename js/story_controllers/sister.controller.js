angular.module('BSG').controller('SisterCtrl', function($scope, sisterFactory) {
    'use strict';
  $scope.user = sisterFactory.user;

	var updateFactory = function() {
	    
	    sisterFactory.setData($scope.name, $scope.fav_toy, $scope.brother_or_sister);
	}

}); 