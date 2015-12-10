///<reference path="../../typings/tsd.d.ts"/>
define(["require", "exports"], function (require, exports) {
    var ExampleService = (function () {
        function ExampleService() {
        }
        ExampleService.prototype.helloWorld = function () {
            return "Hello World";
        };
        return ExampleService;
    })();
    return ExampleService;
});
//# sourceMappingURL=exampleService.js.map