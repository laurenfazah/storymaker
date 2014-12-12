// initialize the app
angular.module('BSG', []);

// main controller
angular.module('BSG').controller('MainCtrl', function($scope, $http) {
    'use strict';
    // ajax
    $http.get('http://localhost:3000/genres').success(function(response) {
        $scope.genres = response;
    });
});