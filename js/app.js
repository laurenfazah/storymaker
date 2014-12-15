// initialize the app
angular.module('BSG', [
    'ngRoute'
]);

angular.module('BSG').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/users', {
            templateUrl: 'templates/users.html',
            controller: 'UserCtrl'
        })
        .when('/stories', {
            templateUrl: 'templates/stories.html',
            controller: 'StoryCtrl'
        })
        .when('/genres', {
            templateUrl: 'templates/genres.html',
            controller: 'GenreCtrl'
        })
        .when('/airplane', {
            templateUrl: 'templates/stories/airplane.html',
        })
        .otherwise({
            redirectTo: '/'
        });
});