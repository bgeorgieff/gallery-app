import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { TitleModule } from "../title/title.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AuthFormComponent } from "./pages/auth-form.component";

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    TitleModule,
    FlexLayoutModule,
  ],
})
export class UserModule {}
