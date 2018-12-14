import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ApiCallsService } from '../api-calls.service';


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  constructor(private route: Router , private activatedroute: ActivatedRoute, private api: ApiCallsService) { }

  testData: any ;
  questions;
  currentQuestion = 0;
  question: any ;
  selectedTestId = 'tests/';
  last: boolean;

  checkIfLast () {
    if ((this.questions.length - 1) === this.currentQuestion) {
      this.last = true;
    }
  }

  nextQuestion() {
    this.currentQuestion++;
    this.question = this.questions[this.currentQuestion];
    console.log(this.questions.length);
    console.log(this.currentQuestion);
  }

  endTest() {
    this.route.navigate(['/test-result', this.selectedTestId]);
  }

  ngOnInit() {
    this.question = {};
    this.activatedroute.url.subscribe(data => {
    this.selectedTestId += data[1].path;
    });

    this.api.get(this.selectedTestId)
    .subscribe(res => {
      this.testData = res.body;
      this.questions = this.testData.questions;
      this.question = this.questions[0];
      this.checkIfLast ();
    });
  }
}
