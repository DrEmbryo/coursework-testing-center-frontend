import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})

export class UserInfoPageComponent implements OnInit {

  constructor(private api: ApiCallsService , private auth: AuthService ,  private router: Router) { }

  results: any ;
  user: any;

  onLogOut() {
    this.router.navigate(['']);
    this.auth.deleteCookie('token');
  }

  ngOnInit() {
    this.user = {};

    this.api.get('users/userdata')
    .subscribe(res => {
       this.user = res.body;
    });

    this.api.get('results')
    .subscribe(res => {
      this.results = res.body;
   });
  }

}
