import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./modules/material/material.module";
import { SideNavListComponent } from "./components/side-nav-list/side-nav-list.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToasterModule } from "./modules/toaster/toaster.module";
import { AuthInterceptor } from "./components/interceptors/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    SideNavListComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ToasterModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
