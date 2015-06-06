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

var hioControllers = angular.module('hioControllers', []);

hioControllers.controller('hioCtrl', ['$scope', 'Meta',
    function ($scope, Meta) {
        $scope.hioMeta = Meta.tags;

        $scope.indexContent = 'este es el index';
    }
]);

hioControllers.controller('homeCtrl', ['$scope', 'Meta', '$http',
    function ($scope, Meta, $http) {
        $scope.hioMeta = Meta.tags;
        $scope.hioMeta.description = "";
        $scope.hioMeta.title = "Home";

        $http({
            method: "GET",
            url: "/angularjs-boilerplate/data/home.json",
            params: {
                token: Math.random()
            }
        }).success(function (data, status, headers, config) {
            $scope.homeContent = data;
        });
    }
]);

hioControllers.controller('aboutCtrl', ['$scope', 'Meta', '$routeParams',
    function ($scope, Meta, $routeParams) {
        $scope.hioMeta = Meta.tags;
        $scope.hioMeta.description = "";
        $scope.hioMeta.title = "About";

        $scope.aboutContent = $routeParams.message;
    }
]);
