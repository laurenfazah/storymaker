angular.module('BSG').controller('StoryCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://dry-ocean-9343.herokuapp.com/stories').success(function(response) {
        $scope.stories = response;
    });

    $scope.upsertStory = function(story) {
        var params = {
            story: story
        };
        
        if (story.id) {
            $http.put('http://dry-ocean-9343.herokuapp.com/stories/' + story.id, params);
        } else {
            $http.post('http://dry-ocean-9343.herokuapp.com/stories', params).success(function(response) {
                $scope.stories.push(response);
            });
        }

        $scope.story = {};
    };

    $scope.editStory = function(story) {
        $scope.story = story;
    };

    $scope.deleteStory = function(story) {
        $http.delete('http://dry-ocean-9343.herokuapp.com/stories/' + story.id).success(function(response) {
            // remove from users array by id
            for (var i = 0; i < $scope.stories.length; i++){
                if ($scope.stories[i].id == story.id) {
                    $scope.stories.splice(i, 1);

                    break;
                }
            }
        });
    };
});