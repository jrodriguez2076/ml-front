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
        
        let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODYwMzQ2NzgsIm5iZiI6MTU4NjAzNDY3OCwianRpIjoiMjU4ODhmZmMtMTQ2NC00Y2Q2LTgyMjYtOTBmNWQ3ZDRhM2MzIiwiZXhwIjoxNTg2MTIxMDc4LCJpZGVudGl0eSI6Impvc2VyIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.Y3qlLpzPBj7oLJq5gl8BfPQYN9NP-qZoLxUt25J164A"

        let headersDict ={
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}` ,
            // 'Access-Control-Allow-Origin': '*',
        }
        
        // let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let headers = new HttpHeaders(headersDict);
        // try {
        //     // let accessToken = window.localStorage.getItem("access-token");
            
        //     headers = headers.append('Authorization', 'Bearer '+ accessToken) 
        //     console.log(headers);
        // } catch (error) {
        //     console.log('no token found')
        // }
        let result = {
            "status": "done",
            "result": 0.95
        }
        // return result;
        return this.http.post<any>(this.backendUrl + '/api/services/text-similarity', body, { headers: headers });
    }

    entityRecognition( inputText: string) {
        let body = {
            "text": inputText,
        }
        
        let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODYwMzQ2NzgsIm5iZiI6MTU4NjAzNDY3OCwianRpIjoiMjU4ODhmZmMtMTQ2NC00Y2Q2LTgyMjYtOTBmNWQ3ZDRhM2MzIiwiZXhwIjoxNTg2MTIxMDc4LCJpZGVudGl0eSI6Impvc2VyIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.Y3qlLpzPBj7oLJq5gl8BfPQYN9NP-qZoLxUt25J164A"

        let headersDict ={
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}` ,
        }
        
        // let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let headers = new HttpHeaders(headersDict);

        let result = {
            "status": "done",
            "result": "Location, Time, Date"
        }

        console.log("Returning result")
        // return result;
        return this.http.post<any>(this.backendUrl + '/api/services/ner', body, { headers: headers });
        // return this.http.post<ApiResult>(this.backendUrl + '/services/ner', body, { headers: headers });
    }

    imageRecognition( imageUrl: string) {
        let body = {
            "url": imageUrl,
        }
        console.log("GETTING IMAGE")
        let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODYwMzQ2NzgsIm5iZiI6MTU4NjAzNDY3OCwianRpIjoiMjU4ODhmZmMtMTQ2NC00Y2Q2LTgyMjYtOTBmNWQ3ZDRhM2MzIiwiZXhwIjoxNTg2MTIxMDc4LCJpZGVudGl0eSI6Impvc2VyIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.Y3qlLpzPBj7oLJq5gl8BfPQYN9NP-qZoLxUt25J164A"

        let headersDict ={
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}` ,
        }
        
        let headers = new HttpHeaders(headersDict);
        // let headers = new HttpHeaders().set('Content-Type', 'application/json');
        // try {
        //     let accessToken = window.localStorage.getItem("access-token");
        //     headers = headers.append('Authorization', 'Bearer '+ accessToken)    
        // } catch (error) {
        //     console.log('no token found')
        // }
        // let result = {
        //     "status": "done",
        //     "result": "Maracucho"
        // }
        console.log(this.backendUrl + 'api/services/image-classification')
        // return result;s
        return this.http.post<any>(this.backendUrl + '/api/services/image-classification', body, { headers: headers });   
    }
}