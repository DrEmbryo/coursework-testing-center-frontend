import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiCallsService } from '../api-calls.service';
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

  sendLoginData() {
    const data = {
      login: <string>this.login.value,
      password: <string>this.password.value,
    };

    this.api.post('auth/login', data)
    .subscribe(res => {
       if ( res.status === 200 ) {
        this.router.navigate(['user']);
       }
    });
  }

  ngOnInit() {
  }

}
