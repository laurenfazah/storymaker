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
            controller: "AirplaneCtrl"
        })
        .when('/beach', {
            templateUrl: 'templates/stories/beach.html',
            controller: "BeachCtrl"
        })
        .when('/fishing', {
            templateUrl: 'templates/stories/fishing.html',
            controller: "FishingCtrl"
        })
        .when('/sister', {
            templateUrl: 'templates/stories/sister.html',
            controller: "SisterCtrl"
        })
        .when('/swing', {
            templateUrl: 'templates/stories/swing.html',
            controller: "SwingCtrl"
        })
        .when('/teddy', {
            templateUrl: 'templates/stories/teddy.html',
            controller: "TeddyCtrl"
        })
        .otherwise({
            redirectTo: '/'
        });
});