'use strict';
angular.module('BSG').controller('BeachPromptsCtrl', ['$scope','$location','$routeParams','beachFactory',function($scope,$location,$routeParams,beachFactory) {
  $scope.user = {};
	$scope.updateFactory = function(user) {
    beachFactory.setData(user.name, user.fav_food, user.ice_cream_flavor).then(function(){
    	console.log('returned a promise');
    	$location.path('/beach');
    });
	};
}]); 