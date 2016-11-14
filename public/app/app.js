/*global angular*/

angular.module('app', ['ngResource', 'ngRoute', 'hmTouchEvents']);
angular.module('app').config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {
    "use strict";

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main',
            controller: 'mainController'
        })
        .when('/:path', {
            templateUrl: '/partials/main',
            controller: 'mainController'
        }).when('/:path/:index', {
            templateUrl: '/partials/photo',
            controller: 'photoController'
        }).otherwise({
            redirectTo: '/'
        });
});
