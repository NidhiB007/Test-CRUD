import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Test } from "./dashboard.model";
import { DashboardService } from "./dashboard.service";

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
  tests: Test[] = [
    {
      id: 1,
      name: "Test 1",
      marks: 7,
      duration: 20,
    },
    {
      id: 2,
      name: "Test 2",
      marks: 7,
      duration: 20,
    },
    {
      id: 3,
      name: "Test 3",
      marks: 7,
      duration: 20,
    },
  ];

  ngOnInit() {
    this.getTestList();
  }

  getTestList() {
    this.dashboardService.getTestList().subscribe((result) => {
      console.log(result);
    });
  }

  addTest() {
    this._router.navigate(["/quiz"], {
      queryParams: {},
    });
  }
}
