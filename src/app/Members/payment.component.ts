import {Component, Input} from '@angular/core';

import {IPayment} from './member.model';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

    selector: 'as-payment',
    templateUrl: 'app/members/payment.html',
    styleUrls: ['app/members/member.css']
})
export class PaymentComponent {
    constructor(){
        if(this.payments == null || this.payments.length === 0){
            this.pay =  {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
        }
        else {
            this.pay = this.payments[0];
        }


    }
    @Input()
    payments: Array<IPayment>;
    pay: IPayment;
    public addPayment(p: IPayment){
        this.payments.push(p);
    }
    public onPaymentTable(pay :IPayment){
        if(event.target["id"]=== "Add")
        {
            let newpay = {receivedDate: new Date(), amount: 0, type: "cash", targetDate: new Date(), active: false};
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

}


/**
 * Created by fox21 on 12/18/2016.
 */
