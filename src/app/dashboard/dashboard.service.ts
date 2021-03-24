import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private _http: HttpClient) {}

  getTestList() {
    return this._http.get<any>(`localhost:4200/api/test`);
  }

  getQuestions() {
    return this._http.get<any>(`localhost:4200/api/test/questions`);
  }

  saveTest(query) {
    return this._http.post<any>(`localhost:4200/api/test`, query);
  }
}
