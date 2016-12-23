import {Component, Input, OnInit} from '@angular/core';

import {ExtendedMember, Member} from './member.model';
import {ActivatedRoute, Params, Router}   from '@angular/router';
import {isNullOrUndefined} from "util";

@Component({

    selector: 'as-em',
    templateUrl: 'app/members/ExtendedMembers.html',
    styleUrls: ['app/members/member.css']
})
export class ExtendedMembersComponent implements OnInit {

    constructor(r: Router){
        if(this.ems == null || this.ems.length === 0){
            this.em = new ExtendedMember();
        }
        else {
            this.em = this.ems[0];
        }
        this.mode = "Add";
        this.router = r;
    }
    @Input()
    member: Member;
    router: Router;
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
        if (event.target["id"] === "Remove") {
            for(let i = 0; i < this.ems.length; i++){
                if(this.ems[i] === al) {
                    this.delMember(i);
                    return;
                }
            }
        }
    }
    saveChanges(){
        console.log("clicked save");

        this.router.navigate(['/memberlist']);
    }
    ngOnInit(){
        if(this.member === undefined) {
            console.log("input is not set yet, member is undefined");
            return;
        }
        if(this.member.ExtendedMembers == null)
        {
            this.member.ExtendedMembers = new Array<ExtendedMember>();
        }
            this.ems = this.member.ExtendedMembers;
    }
}
/**
 * Created by fox21 on 12/19/2016.
 */
