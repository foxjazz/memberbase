import {Component,  OnInit} from '@angular/core';

import {Member, IPayment, ExtendedMember, AllIds} from './member.model';
import {PaymentComponent} from './payment.component';
import {ActivatedRoute, Params, Router}   from '@angular/router';
import {MemberService} from "./member.service";


//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

    selector: 'as-maintenance',
    providers: [MemberService],
    templateUrl: 'app/members/maintenance.html',
    styleUrls: ['app/members/member.css']
})
export class MaintenanceComponent implements OnInit {
    member: Member;
    payments: Array<IPayment>;
    ems: Array<ExtendedMember>;
    memberlist: Array<Member>;
    ms: MemberService;
    temp: string;
    filterName: string;
    constructor(private lms: MemberService){
        this.ms = lms;
    }
    private doConvert(){
        this.memberlist = new Array<Member>();
        this.ms.getAllDocs().subscribe(r1 => {

            for(let nn of r1.rows)
            {
                this.ms.getDoc(nn.id).subscribe(res2 =>
                {
                    let m = new Member(res2.Email, false);
                    m.address = res2.address;
                    m._id = res2._id;
                    m.city = res2.city;
                    m.state = res2.state;
                    m.zip = res2.zip;
                    m.payments = new Array<IPayment>();
                    m.email = res2.email;
                    m.firstName = res2.firstName;
                    m.lastName = res2.lastName;

                    for(let p of res2.payments)
                    {
                        let pay: IPayment;
                        pay = {receivedDate: p.receivedDate, amount: p.amount, type: '', active: false, targetDate: undefined};
                        m.payments.push(pay);
                    }
                    this.memberlist.push(m);
                });

            }
        });
    }
    public onUsingTable ( al: Member) {
        if(event.target["id"] === "filter") {
            this.temp = '';
        }
        if(event.target["id"] === "runconvert") {
            this.doConvert();
        }

    }
    ngOnInit(){
        this.temp = '';
    }
}
