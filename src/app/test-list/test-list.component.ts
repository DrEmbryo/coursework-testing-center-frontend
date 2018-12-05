import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  constructor() { }

  testList: object [] = [] ;

  ngOnInit() {
    this.testList = [
      {
        name: <string> 'test1'
      },
      {
        name: <string> 'test2'
      },
      {
        name: <string> 'test1'
      },
      {
        name: <string> 'test4'
      },
      {
        name: <string> 'test1'
      },
      {
        name: <string> 'test2'
      },
      {
        name: <string> 'test1'
      },
      {
        name: <string> 'test4'
      },
    ];
  }

}
