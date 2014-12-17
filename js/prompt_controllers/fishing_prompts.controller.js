angular.module('BSG').controller('FishingPromptsCtrl', function($scope, fishingFactory) {
    'use strict';

	function updateFactory() {
	    fishingFactory.setData($scope.name, $scope.fav_color, $scope.imaginary_pet_name);
	}

});