///<reference path="../../typings/tsd.d.ts"/>
define(["require", "exports", 'angular', './exampleService'], function (require, exports, angular, exampleService) {
    return angular.module('myApp.services', [])
        .service("myAppExampleService", exampleService);
});
//# sourceMappingURL=module.js.map