import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthFormComponent } from "./pages/auth-form.component";

const routes: Routes = [
  { path: "login", component: AuthFormComponent },
  { path: "register", component: AuthFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
