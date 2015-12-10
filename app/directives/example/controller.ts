///<reference path="../../../typings/tsd.d.ts"/>

export = ExampleController;

class ExampleController {
    field:string = null;

    static $inject = [
        'myAppExampleService'
    ];

    constructor(
        myAppExampleService
    ) {
        this.field = myAppExampleService.helloWorld();
    }
}