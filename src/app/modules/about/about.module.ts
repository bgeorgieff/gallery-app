import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutRoutingModule } from "./about-routing.module";
import { MyStoryComponent } from "./pages/my-story/my-story.component";
import { ContactMeComponent } from "./pages/contact-me/contact-me.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TitleModule } from "../title/title.module";

@NgModule({
  declarations: [MyStoryComponent, ContactMeComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TitleModule,
  ],
})
export class AboutModule {}
