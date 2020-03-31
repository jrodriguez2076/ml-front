import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { TokenResponse } from '../models/DTO/TokenResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../models/DTO/ApiResponse';




@Injectable()
export class LoginService {
    private backendUrl = environment.backendUrl;
    public tokenData = new BehaviorSubject<TokenResponse>(null);

    constructor(
        private http: HttpClient,
    ) { }

    textSimilarity( text1: string, text2: string  ){
        let body = {
            "text1": text1,
            "text2": text2
        }
        
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        try {
            let accessToken = window.localStorage.getItem("access-token");
            headers.append('Authorization', 'Bearer '+ accessToken)    
        } catch (error) {
            console.log('no token found')
        }
        return this.http.post<ApiResponse>(this.backendUrl + '/services/text-similarity', body, { headers: headers });
    }

    entityRecognition( inputText: string) {
        let body = {
            "text": inputText,
        }
        
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        try {
            let accessToken = window.localStorage.getItem("access-token");
            headers.append('Authorization', 'Bearer '+ accessToken)    
        } catch (error) {
            console.log('no token found')
        }
        return this.http.post<ApiResponse>(this.backendUrl + '/services/ner', body, { headers: headers });
    }

    imageRecognition( imageUrl: string) {
        let body = {
            "url": imageUrl,
        }
        
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        try {
            let accessToken = window.localStorage.getItem("access-token");
            headers.append('Authorization', 'Bearer '+ accessToken)    
        } catch (error) {
            console.log('no token found')
        }
        return this.http.post<ApiResponse>(this.backendUrl + '/services/image-classification', body, { headers: headers });    }
}