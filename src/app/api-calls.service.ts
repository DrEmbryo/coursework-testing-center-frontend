import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient) { }

  get (url) {
   return this.http.get(('/api/' + url) , { observe: 'response' } );
  }

  put (url , postObj) {
    return this.http.put(('/api/' + url) , postObj , { observe: 'response' } );
  }

  post (url , postObj) {
    return this.http.post(('/api/' + url) , postObj , { observe: 'response' } );
  }
}
