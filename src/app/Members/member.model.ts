
export interface IPayment {
    receivedDate: Date;
    amount: number;
    type: string;
    active: boolean;
    targetDate: Date;
}
export class ExtendedMember{
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

export class Member {

    index: number;
    uuid: string;
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
    frequency: number;
    durationmonths: number;
    targetDate: Date;
    ExtendedMembers: Array<ExtendedMember>;
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
        this.frequency = 12;  //frequency of payments in months
        // members.push(this);
        // this.key = members.length;
    }
    public delete(){
            this.active = false;

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
