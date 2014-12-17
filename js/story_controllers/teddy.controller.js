angular.module('BSG').controller('TeddyCtrl', function($scope, teddyFactory) {
    'use strict';
  $scope.user = teddyFactory.user;

	var updateFactory = function() {
	    
	    teddyFactory.setData($scope.name, $scope.fav_animal, $scope.toy_name);
	}

}); 