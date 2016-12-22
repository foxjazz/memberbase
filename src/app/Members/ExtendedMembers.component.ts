import {Component, Input} from '@angular/core';

import {ExtendedMember} from './member.model';


@Component({

    selector: 'as-em',
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
        this.mode = "Add";


    }
    @Input()
    ems: Array<ExtendedMember>;
    em: ExtendedMember;
    mode: string;
    submitForm() {
        //let m = new Member('',false);
        //
        if(this.mode === "Add") {
            this.ems.push(this.em);
        }
        this.em = new ExtendedMember();
        this.mode = "Add";
    }
    delMember(i: number) {
        let index = i;
        if (index > -1) {
            this.ems.splice(index, 1);
        }
    }
    public onUsingTable ( al: ExtendedMember) {
        if (event.target["id"] === "Select") {
            //this.member = new Member('',false,this.memberlist);
            this.em = al;

            this.mode = "Save";
            //localStorage.setItem('members', JSON.stringify(this.memberlist));

        }
    }

}
/**
 * Created by fox21 on 12/19/2016.
 */
