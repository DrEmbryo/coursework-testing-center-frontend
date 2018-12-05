import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {

  constructor() { }
  user: object;
  results: object [] = [] ;

  ngOnInit() {
    this.user = {
      name: <string> 'Pavel',
      surname: <string> 'Goroshko',
      course: <number> 3
    };

    this.results = [
      {
        date: <string> '10.10.2010',
        subject: <string> 'Math',
        procent: <number> 20,
      },
    ];
  }

}
