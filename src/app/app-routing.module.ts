import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
  },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
