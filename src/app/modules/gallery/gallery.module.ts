import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { InViewportModule } from "ng-in-viewport";
import { ImageViewModule } from "../image-view/image-view.module";
import { SingleImageComponent } from "./pages/single-image/single-image.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";

@NgModule({
  declarations: [GalleryComponent, SingleImageComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    FlexLayoutModule,
    InViewportModule,
    ImageViewModule,
  ],
})
export class GalleryModule {}
