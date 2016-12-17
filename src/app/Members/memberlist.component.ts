import {Component, OnDestroy, OnInit} from '@angular/core';

import {Member, IPayment} from './member.model';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

    selector: 'as-memberlist',
    templateUrl: 'app/members/memberlist.html',
    styleUrls: ['app/members/member.css']
})
export class MemberlistComponent implements OnInit, OnDestroy{
    public member: Member;
    payments: Array<IPayment>;
    private list: Member[];
    private showCompleted: Boolean;
    memberlist: Array<Member>;
  //  memberlist: FirebaseListObservable<any[]>;
    constructor(/*af: AngularFire*/) {
        this.showCompleted = true;



    //    this.memberlist = af.database.list('./members');
    }

    addMember() {
        //let m = new Member('',false);
        this.member = new Member('',false, this.memberlist);
        this.member.clear();
    }

    delMember(i: number) {
        let res: string;
        this.memberlist[i].delete();

        let m = null;
        /*let m = memberlist[i];
        this.memberlist.remove(memberlist[i].email)*/

    }

    public onUsingTable ( al: Member) {
        if(event.target["id"] === "Add")
        {
            this.member = new Member('',false,this.memberlist);
            localStorage.setItem('members', JSON.stringify(this.memberlist));

        }
        if(event.target["id"] === "Payments")
        {
            this.payments = al.payments;
        }

        else if (event.target["id"]==="Remove"){
            al.delete();
        }


    }
    ngOnDestroy(){
        localStorage.setItem('members', JSON.stringify(this.memberlist));
    }
    ngOnInit(){
        let res: string;
        res = localStorage.getItem('members');
        if(res != null && res.indexOf('email') > 0) {
            this.memberlist = JSON.parse(res);
            this.member = this.memberlist[0];
        }
        else{
            this.memberlist = new Array<Member>();
            this.member = new Member('',false,this.memberlist);
        }


    }
}
