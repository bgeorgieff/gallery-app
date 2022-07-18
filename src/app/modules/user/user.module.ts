import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { AuthFormComponent } from "./components/auth-form/auth-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TitleModule } from "../title/title.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserComponent } from "./pages/user.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UserComponent, AuthFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    TitleModule,
    FlexLayoutModule,
    RouterModule,
  ],
})
export class UserModule {}
