const {Component} = require("./export-switch");

@Component({
    selector: "app-component",
    template: `
        <ng-shift-module-component></ng-shift-module-component>
        <ng-shift-component></ng-shift-component>
    `
})
export class AppComponent {}
