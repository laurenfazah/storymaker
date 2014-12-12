angular.module('BSG').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })        
        .when('/stories', {
            templateUrl: 'templates/stories.html'
        })        
        .when('/users', {
            templateUrl: 'templates/users.html'
        })        
        .otherwise({
            redirectTo: '/'
        });
});