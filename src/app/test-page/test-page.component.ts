// '✔️'
// 5c0bcf96dd9bb23744c7122b
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

  questions: any;
  currentQuestion = 0;
  question: any ;
  url = '';
  last: boolean;
  testAnswers = [];
  questionAnswer = [];

  onSelectItem(i) {

  }

  checkIfLast () {
    if ((this.questions.length - 1) === this.currentQuestion) {
      this.last = true;
    }
  }

  nextQuestion() {
    this.currentQuestion++;
    this.checkIfLast ();
    this.question = this.questions[this.currentQuestion];
  }

  endTest() {
    this.url = '5c0bcf96dd9bb23744c7122b';
    this.route.navigate(['/test-result', this.url]);
  }

  ngOnInit() {

    this.question = {};
    this.activatedroute.url.subscribe(data => {
    this.url += data[1].path;
    });

    this.api.get('tests/' + this.url)
    .subscribe(res => {
      const testData = <any> res.body;
      this.questions = testData.questions;
      this.question = this.questions[0];
      this.checkIfLast ();
    });
  }
}
