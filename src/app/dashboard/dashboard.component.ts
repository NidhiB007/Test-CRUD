import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Test } from "./dashboard.model";
import { DashboardService } from "./dashboard.service";
import * as _ from "lodash";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    private _router: Router
  ) {}
  tests: Test[] = [];
  averageMark: number = 0;
  averageDuration: number = 0;

  ngOnInit() {
    this.getTestList();
  }

  getTestList() {
    this.dashboardService.getTestList().subscribe((result) => {
      if (result.status === "SUCCESS") {
        this.tests = result.data;
        this.averageMark =
          this.tests.length > 0
            ? _.sumBy(this.tests, "marks") / this.tests.length
            : 0;
        this.averageDuration =
          this.tests.length > 0
            ? _.sumBy(this.tests, "duration") / this.tests.length
            : 0;
      }
    });
  }

  addTest() {
    this._router.navigate(["/quiz"], {
      queryParams: {},
    });
  }
}
