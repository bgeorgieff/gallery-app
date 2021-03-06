import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ToastrService } from "./services/toastr.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  message!: string;
  type!: string;
  subscriptions: Subscription[] = [];

  constructor(private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.toastrService.message$.subscribe((msg) => {
        this.message = msg.text;
        this.type = msg.type;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
