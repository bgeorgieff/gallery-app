import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreRoutingModule } from "./core-routing.module";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [HomePageComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, CoreRoutingModule],
  exports: [HomePageComponent, HeaderComponent, FooterComponent],
})
export class CoreModule {}
