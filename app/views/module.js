///<reference path="../../typings/tsd.d.ts"/>
define(["require", "exports", 'angular'], function (require, exports, angular) {
    return angular.module('myApp.views', [
        'ngRoute'
    ]).config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/example', {
                template: '<my-app-example></my-app-example>'
            });
            $routeProvider.otherwise({ redirectTo: '/example' });
        }]);
});
//# sourceMappingURL=module.js.map