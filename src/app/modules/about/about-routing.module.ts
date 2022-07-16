import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactMeComponent } from "./pages/contact-me/contact-me.component";
import { MyStoryComponent } from "./pages/my-story/my-story.component";

const routes: Routes = [
  { path: "my-story", component: MyStoryComponent },
  { path: "contact-me", component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
