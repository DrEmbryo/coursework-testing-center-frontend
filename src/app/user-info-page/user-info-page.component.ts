import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IuserInfo {
  name: string ;
  surname: string;
  email: string ;
  avatar: string;
}

interface IuserData {
    date: string;
    subject: string;
    procent: number;
}

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})

export class UserInfoPageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  results: any ;
  user: any;

  ngOnInit() {
    this.http.get<IuserInfo>('/api/user' , { observe: 'response' } )
    .subscribe(res => {
      this.user = res.body;
    });

    this.http.get<IuserData>('/api/user-data' , { observe: 'response' } )
    .subscribe(res => {
      this.results = res.body ;
    });
  }

}
