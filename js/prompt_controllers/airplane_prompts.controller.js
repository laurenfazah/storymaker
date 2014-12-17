'use strict';
angular.module('BSG').controller('AirplanePromptsCtrl', ['$scope','$location','$routeParams','airplaneFactory',function($scope,$location,$routeParams,airplaneFactory) {
  $scope.user = {};
	$scope.updateFactory = function(user) {
		// console.log(user.name, user.last_name, user.color);
    airplaneFactory.setData(user.name, user.last_name, user.color).then(function(){
    	console.log('returned a promise');
    	$location.path('/airplane');
    });
	};
}]);