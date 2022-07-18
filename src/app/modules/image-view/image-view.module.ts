import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImageViewComponent } from "./components/image-view/image-view.component";

@NgModule({
  declarations: [ImageViewComponent],
  imports: [CommonModule],
  exports: [ImageViewComponent],
})
export class ImageViewModule {}
