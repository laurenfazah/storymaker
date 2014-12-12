// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope, $http) {
    'use strict';
    // ajax
    $http.get('http://localhost:3000/genres').success(function(response) {
        $scope.genres = response;
    });
});