// initialize the app
angular.module('BSG', [
    'ngRoute'
]).run(function(airplaneFactory, beachFactory, fishingFactory, sisterFactory, swingFactory, teddyFactory){

});
// .run(function(beachFactory){
    
// }).run(function(fishingFactory){
    
// }).run(function(sisterFactory){
    
// }).run(function(swingFactory){
    
// }).run(function(teddyFactory){
    
// })


angular.module('BSG').config(function($routeProvider) {
    'use strict';

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            templateUrl: 'templates/about.html',
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
        .when('/airplaneprompts', {
            templateUrl: 'templates/stories/airplane_prompts.html',
            controller: "AirplanePromptsCtrl"
        })
        .when('/beach', {
            templateUrl: 'templates/stories/beach.html',
            controller: "BeachCtrl"
        })
        .when('/beachprompts', {
            templateUrl: 'templates/stories/beach_prompts.html',
            controller: "BeachPromptsCtrl"
        })
        .when('/fishing', {
            templateUrl: 'templates/stories/fishing.html',
            controller: "FishingCtrl"
        })
        .when('/fishingprompts', {
            templateUrl: 'templates/stories/fishing_prompts.html',
            controller: "FishingPromptsCtrl"
        })
        .when('/sister', {
            templateUrl: 'templates/stories/sister.html',
            controller: "SisterCtrl"
        })
        .when('/sisterprompts', {
            templateUrl: 'templates/stories/sister_prompts.html',
            controller: "SisterPromptsCtrl"
        })
        .when('/swing', {
            templateUrl: 'templates/stories/swing.html',
            controller: "SwingCtrl"
        })
        .when('/swingprompts', {
            templateUrl: 'templates/stories/swing_prompts.html',
            controller: "SwingPromptsCtrl"
        })
        .when('/teddy', {
            templateUrl: 'templates/stories/teddy.html',
            controller: "TeddyCtrl"
        })
        .when('/teddyprompts', {
            templateUrl: 'templates/stories/teddy_prompts.html',
            controller: "TeddyPromptsCtrl"
        })
        .otherwise({
            redirectTo: '/'
        });
});