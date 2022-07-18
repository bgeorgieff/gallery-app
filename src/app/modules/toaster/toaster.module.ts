import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastrComponent } from "./components/toastr/toastr.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [ToastrComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [ToastrComponent],
})
export class ToasterModule {}
