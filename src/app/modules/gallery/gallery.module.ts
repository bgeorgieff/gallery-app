import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { InViewportModule } from "ng-in-viewport";
import { ImageViewModule } from "../image-view/image-view.module";
import { SingleImageComponent } from "./pages/single-image/single-image.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { AddEditPaintingComponent } from "./pages/add-edit-painting/add-edit-painting.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { TitleModule } from "../title/title.module";

@NgModule({
  declarations: [
    GalleryComponent,
    SingleImageComponent,
    AddEditPaintingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryRoutingModule,
    FlexLayoutModule,
    InViewportModule,
    ImageViewModule,
    ReactiveFormsModule,
    TitleModule,
  ],
})
export class GalleryModule {}
