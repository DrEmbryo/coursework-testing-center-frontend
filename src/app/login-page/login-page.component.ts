import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiCallsService } from '../api-calls.service';
import { HttpHeaders } from '@angular/common/http';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private api: ApiCallsService, private router: Router) { }

  login = new FormControl('');
  password = new FormControl('');
  resStatus: number;

  httpOptions = {
    headers: new HttpHeaders({
     responseType: 'text' })
  };

  sendLoginData() {
    const data = {
      login: this.login.value,
      password: this.password.value,
    };

    this.api.post('auth/login', data , this.httpOptions)
    .subscribe(res => {
       if ( res.status === 200 ) {
        this.router.navigate(['user']);
       }
    });
  }

  ngOnInit() {
  }

}
