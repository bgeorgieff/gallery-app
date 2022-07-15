import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InViewportModule } from "ng-in-viewport";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { MaterialModule } from "../material/material.module";
import { CardComponent } from "./components/card/card.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ModalWindowComponent } from "./components/modal-window/modal-window.component";

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    CardComponent,
    ModalWindowComponent,
  ],
  entryComponents: [ModalWindowComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    InViewportModule,
  ],
})
export class HomeModule {}
