import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  constructor() { }

  question: object ;

  ngOnInit() {
    this.question = {
      last: <boolean> false,
      text: <string> 'test question',
      type: <string> 'check',
    };
  }

}
