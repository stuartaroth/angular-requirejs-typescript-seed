///<reference path="../../../typings/tsd.d.ts"/>
define(["require", "exports"], function (require, exports) {
    var ExampleDirective = (function () {
        function ExampleDirective() {
            this.restrict = 'E';
            this.controller = 'myAppExampleController';
            this.controllerAs = 'ctrl';
            this.bindToController = true;
            this.templateUrl = './directives/example/template.html';
            this.scope = {};
        }
        ExampleDirective.create = function () {
            return new ExampleDirective();
        };
        return ExampleDirective;
    })();
    return ExampleDirective;
});
//# sourceMappingURL=directive.js.map