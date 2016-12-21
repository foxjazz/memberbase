import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'lodash';

import { Member } from './member.model';

@Pipe({
    name: 'asFilter'
})
export class FilterPipe implements PipeTransform {
    transform(mems: Member[], active: boolean, firstName: string, lastName: string): Member[] {
        let newmems = mems;
        if(active) {
            newmems = filter(mems, {active});
        }
        if(firstName.length > 0)
        {
            let mems2 = new Array<Member>();
            for(let al of newmems){
                if(al.firstName.indexOf(firstName) > -1 )
                    mems2.push(al);
            }
            newmems = mems2;
        }
        if(lastName.length > 0)
        {
            let mems2 = new Array<Member>();
            for(let al of newmems){
                if(al.lastName.indexOf(lastName) > -1 )
                    mems2.push(al);
            }
            newmems = mems2;
        }
        return newmems;
    }
}
