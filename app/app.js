'use strict';

define([
    'angular',
    'angularRoute',
    'services/module',
    'directives/module',
    'views/module'
], function(
    angular,
    angularRoute,
    services,
    directives,
    views
) {
    return angular.module('myApp', [
        'ngRoute',
        'myApp.services',
        'myApp.directives',
        'myApp.views'
    ])
});