import { Component, OnInit } from "@angular/core";
import { PageTitles } from "src/app/enums/page-titles.enum";
import { TitleService } from "src/app/services/title.service";

@Component({
  templateUrl: "./my-story.component.html",
  styleUrls: ["./my-story.component.scss"],
})
export class MyStoryComponent {
  constructor(private titleService: TitleService) {
    this.titleService.setTitle(PageTitles.aboutMe);
  }
}
