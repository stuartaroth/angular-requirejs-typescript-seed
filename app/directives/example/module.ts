///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import exampleDirective = require('./directive');
import exampleController = require('./controller');

export = angular.module('myApp.example', [])
    .controller('myAppExampleController', exampleController)
    .directive('myAppExample', exampleDirective.create);