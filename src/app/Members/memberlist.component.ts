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
        this.member = new Member('',false);

        this.memberlist.push(this.member);
        this.member.key = this.memberlist.length;
        this.member.clear();
        localStorage.setItem('members', JSON.stringify(this.memberlist));
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
            //localStorage.setItem('members', JSON.stringify(this.memberlist));

        }
        if(event.target["id"] === "Payments")
        {
            if(al.payments == null || al.payments.length == 0)
            {
                let newpay = {receivedDate: new Date(), amount: 0, type: "cash"};
                al.payments.push(newpay);
            }
            this.payments = al.payments;
        }

        else if (event.target["id"]==="Remove"){
            al.delete();
        }


    }
    public onPaymentTable(pay :IPayment){
        if(event.target["id"]=== "Add")
        {
            let newpay = {receivedDate: new Date(), amount: 0, type: "cash"};
            this.payments.push(newpay);
        }
        else if(event.target["id"]==="Delete")
        {
            let index = this.payments.indexOf(pay, 0);
            if (index > -1) {
                this.payments.splice(index, 1);
            }
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
