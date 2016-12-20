import {Component, OnDestroy, OnInit} from '@angular/core';

import {Member, IPayment, ExtendedMember} from './member.model';
import {PaymentComponent} from './payment.component';


//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

    selector: 'as-memberlist',
    providers: [PaymentComponent],
    templateUrl: 'app/members/memberlist.html',
    styleUrls: ['app/members/member.css']
})
export class MemberlistComponent implements OnInit, OnDestroy{
    member: Member;
    payments: Array<IPayment>;
    ems: Array<ExtendedMember>;
    memberlist: Array<Member>;
    mode = "Add";
    membercount: number;
    isactive: string;
    private list: Member[];
    private showCompleted: Boolean;

  //  memberlist: FirebaseListObservable<any[]>;
    constructor(/*af: AngularFire*/) {
        this.showCompleted = true;
        this.membercount = 0;
    //    this.memberlist = af.database.list('./members');
    }
    getPayments(): Array<IPayment>{
        if(this.payments == null)
            this.payments = new Array<IPayment>();
        return this.payments;
    }

    getExtended(): Array<ExtendedMember>{
        if(this.ems == null)
            this.ems = new Array<ExtendedMember>();
        return this.ems;
    }

    submitForm() {
        //let m = new Member('',false);
        //
        if(this.mode === "Add") {
            this.memberlist.push(this.member);
            this.member.key = this.memberlist.length;
        }
        this.member = new Member('', false);
        localStorage.setItem('members', JSON.stringify(this.memberlist));
        this.mode = "Add";
    }

    delMember(i: number) {
        let res: string;
        this.memberlist[i].delete();

        //let m = null;
        /*let m = memberlist[i];
        this.memberlist.remove(memberlist[i].email)*/

    }

    public onUsingTable ( al: Member) {
        if(event.target["id"] === "Select")
        {
            //this.member = new Member('',false,this.memberlist);
            this.member = al;

            this.mode = "Save";
            //localStorage.setItem('members', JSON.stringify(this.memberlist));

        }
        if(event.target["id"] === "Payments")
        {
            if(al.payments == null || al.payments.length == 0)
            {
                let newpay = {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
                al.payments.push(newpay);
            }
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
        if(res != null && res.indexOf('phone') > 0) {
            this.memberlist = JSON.parse(res);
            this.member = this.memberlist[0];

        }
        else{
            this.memberlist = new Array<Member>();
            this.member = new Member('',false);

        }
        this.membercount = this.memberlist.length;


    }
}
