import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Iresult {
  correct: number;
  all: number;
}

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  result = <Iresult>{
    correct: 0,
    all: 0,
  };

  ngOnInit() {
    this.http.get<Iresult>('/api/test-result' , { observe: 'response' } )
    .subscribe(res => {
      this.result = res.body ;
    });
  }

}
