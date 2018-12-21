import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  constructor(private api: ApiCallsService, private router: Router) { }
  itemSelected: boolean;
  selectedIndex: number;
  testList: any ;
  selectedTestId: string;

  onTestSelect(i: number) {
    this.selectedIndex = i;
    this.selectedTestId = this.testList[i]._id;
    this.itemSelected = true;
  }

  onTestStart() {
    this.router.navigate(['/test', this.selectedTestId]);
  }

  ngOnInit() {
    this.itemSelected = false;
    this.api.get('tests')
    .subscribe(res => {
      this.testList = res.body ;
    });
  }

}
