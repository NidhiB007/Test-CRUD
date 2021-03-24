import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardService } from "./dashboard.service";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule,
    CommonModule,
    DashboardRoutingModule,
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [HttpClientModule, DashboardService],
})
export class DashboardModule {}
