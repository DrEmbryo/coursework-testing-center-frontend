import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  constructor() { }

  testList: object [] = [] ;
  itemSelected: boolean;
  indexOfSelectedItem: number;

  onTestSelect(i: number) {
    this.indexOfSelectedItem = i;
    this.itemSelected = true;
    console.log(this.indexOfSelectedItem);
  }

  ngOnInit() {
    this.testList = [
      {
        name: <string> 'test1'
      },
      {
        name: <string> 'test2'
      }
    ];

    this.itemSelected = false;
  }

}
