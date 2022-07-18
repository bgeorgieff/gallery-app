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
import { HttpClientModule } from "@angular/common/http";
import { ToasterModule } from "./modules/toaster/toaster.module";

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
