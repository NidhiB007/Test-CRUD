import { Component, OnInit } from "@angular/core";
import { Test } from "../dashboard.model";
import { DashboardService } from "../dashboard.service";
import { Question } from "./test.model";
import * as _ from "lodash";
import { Router } from "@angular/router";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  interval: any;
  constructor(
    private dashboardService: DashboardService,
    private _router: Router
  ) {}
  questions: Question[] = [];
  duration: number = 30;
  ngOnInit() {
    this.getAllQustionList();
  }

  getAllQustionList() {
    this.dashboardService.getQuestions().subscribe((result) => {
      if (result.status === "SUCCESS") {
        this.questions = result.data;
        this.startTimer();
      }
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.duration = +this.duration - 1;
      if (+this.duration === 0) {
        clearInterval(this.interval);
        this.onTestSubmit();
      }
    }, 1000);
  }

  onAnswerSelect(event, id) {
    const index = this.questions.findIndex((q) => q._id === id);
    if (this.questions[index].answer === event.target.value)
      this.questions[index].isCorrect = true;
  }

  onTestSubmit() {
    clearInterval(this.interval);
    let query = new Test();
    query.name = "new test";
    query.marks = _.sumBy(this.questions, function (question) {
      return question.isCorrect ? question.marks : 0;
    });
    query.duration = this.duration;
    this.dashboardService.saveTest(query).subscribe((results) => {
      this._router.navigate(["/dashboard"], {
        queryParams: {},
      });
    });
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
