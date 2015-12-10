///<reference path="../../../typings/tsd.d.ts"/>
define(["require", "exports"], function (require, exports) {
    var ExampleController = (function () {
        function ExampleController(myAppExampleService) {
            this.field = null;
            this.field = myAppExampleService.helloWorld();
        }
        ExampleController.$inject = [
            'myAppExampleService'
        ];
        return ExampleController;
    })();
    return ExampleController;
});
//# sourceMappingURL=controller.js.map