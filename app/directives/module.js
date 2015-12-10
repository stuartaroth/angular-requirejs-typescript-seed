///<reference path="../../typings/tsd.d.ts"/>
define(["require", "exports", 'angular', './example/module'], function (require, exports, angular, example) {
    return angular.module('myApp.directives', [
        example.name
    ]);
});
//# sourceMappingURL=module.js.map