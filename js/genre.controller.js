angular.module('BSG').controller('GenreCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/genres').success(function(response) {
        $scope.genres = response;
    });

    $scope.upsertGenre = function(genre) {
        var params = {
            genre: genre
        };
        
        if (genre.id) {
            $http.put('http://localhost:3000/genres/' + genre.id, params);
        } else {
            $http.post('http://localhost:3000/genres', params).success(function(response) {
                $scope.genres.push(response);
            });
        }

        $scope.genre = {};
    };

    $scope.editGenre = function(genre) {
        $scope.genre = genre;
    };

    $scope.deleteGenre = function(genre) {
        $http.delete('http://localhost:3000/genres/' + genre.id).success(function(response) {
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