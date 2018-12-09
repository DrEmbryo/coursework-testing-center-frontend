import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor() { }
  result: any;

  ngOnInit() {
    this.result = {
      all: 1,
      correct: 1,
    } ;
  }

}
