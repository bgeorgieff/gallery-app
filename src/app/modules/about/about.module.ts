import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MyStoryComponent } from './pages/my-story/my-story.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';


@NgModule({
  declarations: [
    AboutComponent,
    MyStoryComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
