///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');

export = angular.module('myApp.views', [
    'ngRoute'
]).config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/example', {
        template: '<my-app-example></my-app-example>'
    });
    $routeProvider.otherwise({redirectTo: '/example'});
}]);