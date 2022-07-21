import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Assets } from "src/app/enums/assets.enum";
import { LoaderService } from "src/app/services/loader.service";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  isLoading = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.loaderService.isLoading$.subscribe((status) => {
        this.isLoading = status;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
