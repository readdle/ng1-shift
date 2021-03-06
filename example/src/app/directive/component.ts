const {Component, EventEmitter, Output} = require("../export-switch");
const template = process.env.NG2 ? require("./template.ng2.html") : require("./template.ng1.html");

@Component({
    selector: "ng-shift-directive",
    template: template
})
export class NgShiftDirectiveComponent {
    propValue = "propValue";

    ngOnInit() {
        setTimeout(() => {
            this.propValue = "propValue2";
        }, 2000);
    }

    goDirective(id: string) {
        console.log("Output: directive", id);
    }
}
