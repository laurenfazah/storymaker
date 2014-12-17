'use strict';
angular.module('BSG').controller('SisterPromptsCtrl', ['$scope','$location','$routeParams','sisterFactory',function($scope,$location,$routeParams,sisterFactory) {
  $scope.user = {};
	$scope.updateFactory = function(user) {
    sisterFactory.setData(user.name, user.fav_toy, user.brother_or_sister).then(function(){
    	console.log('returned a promise');
    	$location.path('/sister');
    });
	};
}]); 