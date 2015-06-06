/*
 angularjs-boilerplate
 Copyright (c) 2015 Luis Enrique Arriojas
 http://opensource.org/licenses/MIT

 Boilerplate for the lastest stable version of AngularJS.
 Read README.md to know which version of AngularJS was used in this boilerplate.

 ***************** LinkedIn *****************
 * https://www.linkedin.com/in/luisarriojas *
 ********************************************
 */

'use strict';

var hioApp = angular.module('hioApp', ['ngRoute', 'hioControllers', 'hioServices']);

/* router */
hioApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            }).
            when('/about/:message', {
                templateUrl: 'templates/about.html',
                controller: 'aboutCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);

/* fix to crawlers */
hioApp.config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);

/* services */
var hioServices = angular.module('hioServices', []);

hioServices.factory('Meta', [

    function () {
        return {
            tags: {
                description: '',
                title: ''
            }
        }
    }
]);
