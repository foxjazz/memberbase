import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Member, ExtendedMember, IPayment, AllIds} from './member.model';
import {config} from './config';

@Injectable()
export class MemberService
{
    private http;
    constructor(private h: Http)
    {
        this.http = h;
    }

    public getAllDocs(): Observable<AllIds>
    {
        let uri = config.test + "_all_docs";
        return this.http.get(uri)
            .map((res: Response) => res.json());

    }
    public getDoc(id: string): Observable<any>
    {
        let uri = config.test + id;
        return this.http.get(uri)
            .map((res: Response) => res.json());
    }
    public putDoc(id: string, val: string){
        let uri = config.test + id;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.put(uri,val,{headers: headers})
            .map(res => res.json());
    }
}
