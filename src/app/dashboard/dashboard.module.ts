import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardService } from "./dashboard.service";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { TestComponent } from "./test/test.component";

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, TestComponent],
  providers: [],
})
export class DashboardModule {}
