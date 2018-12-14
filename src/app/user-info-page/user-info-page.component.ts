import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';


@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})

export class UserInfoPageComponent implements OnInit {

  constructor(private api: ApiCallsService) { }

  results: any ;
  user: any;

  ngOnInit() {
    this.user = {};

    this.api.get('users/userdata')
    .subscribe(res => {
       this.user = res.body;
    });

    this.api.get('results')
    .subscribe(res => {
      this.results = res.body;
      console.log(this.results);
   });
  }

}
