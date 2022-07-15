import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NavigationExtras, Router } from "@angular/router";
import { ICard } from "src/app/interfaces/card.interface";

@Component({
  selector: "app-modal-window",
  templateUrl: "./modal-window.component.html",
  styleUrls: ["./modal-window.component.scss"],
})
export class ModalWindowComponent implements OnInit {
  painting!: ICard;
  breakpoint = 2;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: ICard,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.painting = this.data;
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2;
  }

  makeEnquiry() {
    const paintingData: NavigationExtras = {
      state: {
        ...this.painting,
      },
    };
    this.router.navigate(["/about/contact-me"], paintingData);
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }
}
