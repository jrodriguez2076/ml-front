import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { TokenResponse } from '../models/DTO/TokenResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../models/DTO/ApiResponse';
import { ApiResult } from '../models/DTO/ApiResult';

@Injectable()
export class PredictionService {
    private backendUrl = environment.backendUrl;
    public tokenData = new BehaviorSubject<TokenResponse>(null);

    constructor(
        private http: HttpClient,
    ) { }

    textSimilarity( text1: string, text2: string  ){
        console.log("fetching request from API")
        let body = {
            "text1": text1,
            "text2": text2
        }
        
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        try {
            let accessToken = window.localStorage.getItem("access-token");
            headers = headers.append('Authorization', 'Bearer '+ accessToken)    
        } catch (error) {
            console.log('no token found')
        }
        let result = {
            "status": "done",
            "result": 0.95
        }
        return result;
        //  this.http.post<ApiResult>(this.backendUrl + '/services/text-similarity', body, { headers: headers });
    }

    entityRecognition( inputText: string) {
        let body = {
            "text": inputText,
        }
        
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        try {
            let accessToken = window.localStorage.getItem("access-token");
            headers = headers.append('Authorization', 'Bearer '+ accessToken)    
        } catch (error) {
            console.log('no token found')
        }
        let result = {
            "status": "done",
            "result": "Location, Time, Date"
        }
        console.log("Returning result")
        return result;

        // return this.http.post<ApiResult>(this.backendUrl + '/services/ner', body, { headers: headers });
    }

    imageRecognition( imageUrl: string) {
        let body = {
            "url": imageUrl,
        }
        
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        try {
            let accessToken = window.localStorage.getItem("access-token");
            headers = headers.append('Authorization', 'Bearer '+ accessToken)    
        } catch (error) {
            console.log('no token found')
        }
        let result = {
            "status": "done",
            "result": "Maracucho"
        }
        console.log("returning Result")
        return result;
        // return this.http.post<ApiResult>(this.backendUrl + '/services/image-classification', body, { headers: headers });   
    }
}