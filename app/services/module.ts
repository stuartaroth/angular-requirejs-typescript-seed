///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');
import exampleService = require('./exampleService');

export = angular.module('myApp.services', [])
    .service("myAppExampleService", exampleService);