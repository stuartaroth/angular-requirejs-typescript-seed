///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');
import example = require('./example/module');

export = angular.module('myApp.directives', [
    example.name
]);