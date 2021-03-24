import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private _http: HttpClient) {}

  getTestList() {
    return this._http.get<any>(`${environment.apiBaseUrl}/api/test`);
  }

  getQuestions() {
    return this._http.get<any>(`${environment.apiBaseUrl}/api/test/questions`);
  }

  saveTest(query) {
    return this._http.post<any>(`${environment.apiBaseUrl}/api/test`, query);
  }
}
