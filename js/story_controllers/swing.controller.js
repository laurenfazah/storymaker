angular.module('BSG').controller('SwingCtrl', function($scope, swingFactory) {
    'use strict';
  $scope.user = swingFactory.user;

	var updateFactory = function() {
	    
	    swingFactory.setData($scope.name, $scope.fav_color, $scope.friend_name);
	}

}); 