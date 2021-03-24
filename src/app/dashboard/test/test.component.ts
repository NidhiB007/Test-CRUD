import { Component, OnInit } from "@angular/core";
import { DashboardService } from "../dashboard.service";
import { Question } from "./test.model";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}
  questions: Question[] = [
    {
      id: 1,
      question: "which option best describes your job role?",
      options: [
        "Small Business Owner or Employee",
        "Nonprofit Owner or Employee",
        "Journalist or Activist",
        "Other",
      ],
      answer: "Other",
      isCorrect: null,
    },
  ];

  ngOnInit() {
    this.getAllQustionList();
  }

  getAllQustionList() {
    this.dashboardService.getQuestions().subscribe((results) => {
      console.log(results);
    });
  }
}
