import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenResponse } from '../models/DTO/TokenResponse'
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { ApiResponse } from '../models/DTO/ApiResponse';

@Injectable()
export class LoginService {
    private authenticationUrl = environment.backendUrl;
    public tokenData = new BehaviorSubject<TokenResponse>(null);

    constructor(
        private http: HttpClient,
    ) { }

    login(email: string, password: string): Observable<TokenResponse> {
        const body = { username: email, password: password };
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        console.log(headers);
        return this.http.post<TokenResponse>(this.authenticationUrl +  '/login', body, { headers: headers });
    }

    forgot() { }

    register(userData): Observable<ApiResponse> {
        let newUser: User = {
            name : "",
            email : "",
            password : "",
        };
        newUser.name = userData.name;
        newUser.email = userData.email;
        newUser.password = userData.password;
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post<ApiResponse>(this.authenticationUrl + '/register', newUser, { headers: headers });
    }

    public setToken(tokens) {
        window.localStorage.setItem('access_token', tokens.accessToken);
        // window.localStorage.setItem('refresh_token', tokens.refreshToken);
    }
}