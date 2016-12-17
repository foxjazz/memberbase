
export interface IPayment {
    receivedDate: Date;
    amount: number;
    type: string;
}
export class Member {

    key: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    createdAt: number;
    joinedDate: Date;
    completed: boolean;
    active: boolean;
    durationmonths: number;
    targetDate: Date;
    payments: Array<IPayment>;
/*
    static clone(member: Member): Member {
        return new Member(member.name, member.done);
    }
*/

    constructor(email: string, done = false) {
        this.email = email;
        this.completed = done;
        this.joinedDate = new Date();
        this.payments = new Array<IPayment>();
        // members.push(this);
        // this.key = members.length;
    }
    public delete(){
            this.active = false;
    }
    public isActive(): string{
        if(this.active)
            return "yes";
        else
            return "no";
    }
    public clear() {
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.phone = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.completed = false;
    }
}
