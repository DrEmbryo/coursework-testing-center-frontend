import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(private api: ApiCallsService, private activatedroute: ActivatedRoute) { }
  selectedTestId: any;

  result: any;

  ngOnInit() {
    this.activatedroute.url.subscribe(data => {
      this.selectedTestId = data[1].path;
      const url = this.selectedTestId.split('/');
      this.selectedTestId = url.slice(-1)[0];
      });

    this.api.get(('results/' + this.selectedTestId ))
    .subscribe(res => {
      this.result = res.body;
    });
  }

}
