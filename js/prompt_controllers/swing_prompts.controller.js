'use strict';
angular.module('BSG').controller('SwingPromptsCtrl', ['$scope','$location','$routeParams','swingFactory',function($scope,$location,$routeParams,swingFactory) {
  $scope.user = {};
	$scope.updateFactory = function(user) {
    swingFactory.setData(user.name, user.fav_color, user.friend_name).then(function(){
    	console.log('returned a promise');
    	$location.path('/swing');
    });
	};
}]); 