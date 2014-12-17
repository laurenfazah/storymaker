angular.module('BSG').controller('SwingPromptsCtrl', function($scope, swingFactory) {
    'use strict';

	function updateFactory() {
	    swingFactory.setData($scope.name, $scope.fav_color, $scope.friend_name);
	}

});