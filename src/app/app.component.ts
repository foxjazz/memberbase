import { Component } from '@angular/core';

import { CONSTANTS } from './shared';

@Component({
    moduleId: module.id,
    selector: 'as-main-app',
    styleUrls: ['app.css'],
    templateUrl: 'app.html'
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }
}
