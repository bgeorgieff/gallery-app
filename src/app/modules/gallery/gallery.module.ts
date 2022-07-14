import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryComponent } from "./gallery.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { InViewportModule } from "ng-in-viewport";

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    FlexLayoutModule,
    InViewportModule,
  ],
})
export class GalleryModule {}
