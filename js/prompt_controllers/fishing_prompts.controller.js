'use strict';
angular.module('BSG').controller('FishingPromptsCtrl', ['$scope','$location','$routeParams','fishingFactory',function($scope,$location,$routeParams,fishingFactory) {
  $scope.user = {};
	$scope.updateFactory = function(user) {
    fishingFactory.setData(user.name, user.fav_color, user.imaginary_pet_name).then(function(){
    	console.log('returned a promise');
    	$location.path('/fishing');
    });
	};
}]); 