///<reference path="../../../typings/tsd.d.ts"/>
define(["require", "exports", 'angular', './directive', './controller'], function (require, exports, angular, exampleDirective, exampleController) {
    return angular.module('myApp.example', [])
        .controller('myAppExampleController', exampleController)
        .directive('myAppExample', exampleDirective.create);
});
//# sourceMappingURL=module.js.map