import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  HttpClientModule,
  HttpClientXsrfModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    HttpClientXsrfModule,
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpServiceInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
