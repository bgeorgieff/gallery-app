import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { TitleService } from "src/app/services/title.service";

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"],
})
export class TitleComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  title!: string;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.titleService.titleStr$.subscribe((title) => {
        this.title = title;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
