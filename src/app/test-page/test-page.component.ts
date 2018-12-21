import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ApiCallsService } from '../api-calls.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})

export class TestPageComponent implements OnInit {

  constructor(private route: Router , private activatedroute: ActivatedRoute, private api: ApiCallsService) { }

  @ViewChild('checkboxes') checkboxesElemRef: ElementRef;

  questions: any;
  currentQuestion = 0;
  question: any ;
  testId = '';
  url = '';
  last: boolean;
  testAnswers = [];
  questionAnswer = [];

  onSelectItem(event , i) {
    const check = event.target.checked;
    this.questionAnswer[i].checked = check;
  }

  arrayRebuild() {
    for (let i = 0; i < this.question.answers.length; i++) {
      const obj = {
        index: i,
        answer: this.question.answers[i],
        checked: false,
      };
      this.questionAnswer.push(obj);
    }
  }

  checkIfLast () {
    if ((this.questions.length - 1) === this.currentQuestion) {
      this.last = true;
    }
  }

  addToArray (arr , obj) {
    arr.push(obj);
  }

  setCheckBoxesToDefault () {
    const cbx = this.checkboxesElemRef.nativeElement.getElementsByTagName('input');
    for (let i = 0; i < cbx.length; i++) {
      cbx[i].checked = false ;
    }
  }

  nextQuestion() {
    this.currentQuestion++;
    this.addToArray(this.testAnswers , this.questionAnswer);
    this.checkIfLast ();
    this.questionAnswer = [] ;
    this.question = this.questions[this.currentQuestion];
    this.arrayRebuild();
    this.setCheckBoxesToDefault();
  }

  endTest() {
    this.addToArray(this.testAnswers , this.questionAnswer); // push last element
    this.api.post('results', {
    testId: this.testId,
    answers: this.testAnswers
    }
    , {})
    .subscribe( res  => {
      this.url = res.body._id;
      this.route.navigate(['/test-result', this.url]);
    });
  }

  ngOnInit() {

    this.question = {};
    this.activatedroute.url.subscribe(data => {
    this.testId += data[1].path;
    });

    this.api.get('tests/' + this.testId)
    .subscribe(res => {
      const testData = <any> res.body;
      this.questions = testData.questions;
      this.question = this.questions[0];
      this.checkIfLast ();
      this.arrayRebuild();
    });
  }
}
