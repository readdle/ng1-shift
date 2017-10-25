const {Directive, EventEmitter, Input, Output} = require("../../export-switch");

@Directive({
    selector: "ng-shift-elem-directive"
})
export class NgShiftElemDirective {
    @Input() ngShiftDirectiveProp?: string;
    @Output() ngShiftDirectiveOutput = new EventEmitter();

    ngOnInit() {
        console.log(this.constructor.name);

        setTimeout(() => this.ngShiftDirectiveOutput.emit(), 1000);
    }

    ngOnChanges() {
        console.log("onChanges", this.constructor.name);
    }
}