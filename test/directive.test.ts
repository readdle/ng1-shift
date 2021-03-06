import "reflect-metadata";
import {Directive} from "../src/decorators/directive";
import {Input} from "../src";

@Directive({
    selector: "[ng1Directive]",
})
class Test {
    @Input() testProp: string;

    ngOnInit() {}
    ngAfterViewInit() {}
    ngOnChanges() {}
    ngOnDestroy() {}
}

@Directive({
    selector: ".ng1Directive",
})
class TestClass {
}

@Directive({
    selector: "ng1Directive",
})
class TestElement {
}

describe("Component decorator", function() {
    let instance: any;

    beforeEach(function() {
        instance = new Test();
    });

    test("should link `controller` to class", function () {
        expect(instance.constructor.controller).toEqual(Test);
    });

    test("should set `restrict` to A", function () {
        expect(instance.constructor.restrict).toEqual("A");
    });

    test("should set `restrict` to E", function () {
        const instance2: any = new TestElement();
        expect(instance2.constructor.restrict).toEqual("E");
    });

    test("should set `restrict` to C", function () {
        const instance2: any = new TestClass();
        expect(instance2.constructor.restrict).toEqual("C");
    });

    test("should link `ngOnInit` to `$onInit`", function () {
        expect(instance.$onInit).toBeDefined();
        expect(instance.$onInit).toEqual(instance.ngOnInit);
    });

    test("should link `bindings` to `bindToController`", function () {
        expect(instance.constructor.bindToController).toBeDefined();
        expect(instance.constructor.bindToController).toEqual(instance.constructor.bindings);
    });

    test("should link `ngAfterViewInit` to `$postLink`", function () {
        expect(instance.$postLink).toBeDefined();
        expect(instance.$postLink).toEqual(instance.ngAfterViewInit);
    });

    test("should link `ngOnChanges` to `$onChanges`", function () {
        expect(instance.$onChanges).toBeDefined();
        expect(instance.$onChanges).toEqual(instance.ngOnChanges);
    });

    test("should link `ngOnDestroy` to `$onDestroy`", function () {
        expect(instance.$onDestroy).toBeDefined();
        expect(instance.$onDestroy).toEqual(instance.ngOnDestroy);
    });
});
