import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(private http: HttpClient, private activatedroute: ActivatedRoute) { }
  selectedTestId: any;

  result = {
    correct: 0,
    all: 0,
  };

  ngOnInit() {
    this.activatedroute.url.subscribe(data => {
      this.selectedTestId = data[1].path;
      const url = this.selectedTestId.split('/');
      this.selectedTestId = url.slice(-1)[0];
      });

    this.http.get<any>(('/api/results/' + this.selectedTestId ) , { observe: 'response' } )
    .subscribe(res => {
      this.result = res.body;
    });
  }

}
