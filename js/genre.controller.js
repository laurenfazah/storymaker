angular.module('BSG').controller('GenreCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://http://dry-ocean-9343.herokuapp.com/genres').success(function(response) {
        $scope.genres = response;
    });

    $scope.upsertGenre = function(genre) {
        var params = {
            genre: genre
        };
        
        if (genre.id) {
            $http.put('http://http://dry-ocean-9343.herokuapp.com/genres/' + genre.id, params);
        } else {
            $http.post('http://http://dry-ocean-9343.herokuapp.com/genres', params).success(function(response) {
                $scope.genres.push(response);
            });
        }

        $scope.genre = {};
    };

    $scope.editGenre = function(genre) {
        $scope.genre = genre;
    };

    $scope.deleteGenre = function(genre) {
        $http.delete('http://http://dry-ocean-9343.herokuapp.com/genres/' + genre.id).success(function(response) {
            // remove from genres array by id
            for (var i = 0; i < $scope.genres.length; i++){
                if ($scope.genres[i].id == genre.id) {
                    $scope.genres.splice(i, 1);

                    break;
                }
            }
        });
    };
});