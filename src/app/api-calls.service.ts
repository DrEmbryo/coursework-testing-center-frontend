import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient) { }

  get (url) {
   return this.http.get(('/api/' + url) , { observe: 'response' } );
  }

  post (url: string , postObj: object , headers) {
    return this.http.post(('/api/' + url) , postObj , { headers , observe: 'response'} );
  }

}
