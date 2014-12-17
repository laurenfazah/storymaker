angular.module('BSG').controller('TeddyPromptsCtrl', function($scope, teddyFactory) {
    'use strict';

	function updateFactory() {
	    teddyFactory.setData($scope.name, $scope.fav_animal, $scope.toy_name);
	}

});