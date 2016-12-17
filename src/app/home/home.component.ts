import { Component, OnInit } from '@angular/core';
import {IOrganization} from "./organization";

@Component({
    moduleId: module.id,
    selector: 'as-home',
    templateUrl: 'home.html',
    styleUrls: [
        'home.css'
    ]
})
export class HomeComponent implements OnInit{
    org: IOrganization;

    ngOnInit(){
        this.org = {orgName: "Secular Hub", currentFee: 45, durationMonths: 12};
        localStorage.setItem('organization', JSON.stringify(this.org));
    }
}
