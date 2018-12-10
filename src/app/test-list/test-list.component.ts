import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


interface ItestList {
  id: string;
  testName: string;
}

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  constructor(private http: HttpClient, private elemRef: ElementRef, private route: ActivatedRoute , private router: Router) { }
  itemSelected: boolean;
  selectedIndex: number;
  testList: any ;
  selectedTestId: string;

  onTestSelect(i: number) {
    this.selectedIndex = i;
    this.selectedTestId = this.testList[i].id;
    this.itemSelected = true;
  }

  onTestStart() {
    this.router.navigate(['/test', this.selectedTestId]);
  }

  ngOnInit() {
    this.itemSelected = false;
    this.http.get<ItestList>('/api/test-list' , { observe: 'response' } )
    .subscribe(res => {
      this.testList = res.body ;
    });
  }

}
