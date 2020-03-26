import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Token } from '../models/token'
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    private authenticationUrl =  environment.backendUrl + '/login';

    constructor(
        private http: HttpClient,
    ){}

    login(email: string, password: string) {
        const body = { username: email, password: password };
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<Token>(this.authenticationUrl, body, { headers: headers });
        // console.log(`Logged in as: ${email} with password ${password}`);
    }

    forgot(){}

    register(){
        console.log('Registered!')
    }


}