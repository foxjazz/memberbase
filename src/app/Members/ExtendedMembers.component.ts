import {Component, Input} from '@angular/core';

import {ExtendedMember} from './member.model';


@Component({

    selector: 'as-am',
    templateUrl: 'app/members/ExtendedMembers.html',
    styleUrls: ['app/members/member.css']
})
export class ExtendedMembersComponent {
    constructor(){
        if(this.ems == null || this.ems.length === 0){
            this.em = new ExtendedMember();
        }
        else {
            this.em = this.ems[0];
        }


    }
    @Input()
    ems: Array<ExtendedMember>;
    em: ExtendedMember;
    public addPayment(p: ExtendedMember){
        this.ems.push(p);
    }
    public onPaymentTable(em :ExtendedMember){
        if(event.target["id"]=== "Add")
        {
            this.ems.push(new ExtendedMember());
        }
        else if(event.target["id"]==="Delete")
        {
            let index = this.ems.indexOf(em, 0);
            if (index > -1) {
                this.ems.splice(index, 1);
            }
        }

    }

}
/**
 * Created by fox21 on 12/19/2016.
 */
