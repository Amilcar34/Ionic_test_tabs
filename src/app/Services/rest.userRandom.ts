import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RandomUserResponse } from '../Model/RandomUserResponse';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const webSite = 'https://randomuser.me/api';

@Injectable({
    providedIn: 'root'
})

export class RandomUserApi{
    
    constructor(private htttpClient : HttpClient){}

    public getUser() : Observable<RandomUserResponse> {
        return this.htttpClient.get<RandomUserResponse>(webSite);
    }
}