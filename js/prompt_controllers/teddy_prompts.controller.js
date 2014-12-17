'use strict';
angular.module('BSG').controller('TeddyPromptsCtrl', ['$scope','$location','$routeParams','teddyFactory',function($scope,$location,$routeParams,teddyFactory) {
  $scope.user = {};
	$scope.updateFactory = function(user) {
    teddyFactory.setData(user.name, user.fav_animal, user.toy_name).then(function(){
    	console.log('returned a promise');
    	$location.path('/teddy');
    });
	};
}]); 