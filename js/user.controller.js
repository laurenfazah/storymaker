angular.module('BSG').controller('UserCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://dry-ocean-9343.herokuapp.com/users').success(function(response) {
        $scope.users = response;
    });

    $scope.upsertUser = function(user) {
        var params = {
            user: user
        };
        
        if (user.id) {
            $http.put('http://dry-ocean-9343.herokuapp.com/users/' + user.id, params);
        } else {
            $http.post('http://dry-ocean-9343.herokuapp.com/users', params).success(function(response) {
                $scope.users.push(response);
            });
        }

        $scope.user = {};
    };

    $scope.editUser = function(user) {
        $scope.user = user;
    };

    $scope.deleteUser = function(user) {
        $http.delete('http://dry-ocean-9343.herokuapp.com/users/' + user.id).success(function(response) {
            // remove from users array by id
            for (var i = 0; i < $scope.users.length; i++){
                if ($scope.users[i].id == user.id) {
                    $scope.users.splice(i, 1);

                    break;
                }
            }
        });
    };
});