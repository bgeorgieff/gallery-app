import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NavigationExtras, Router } from "@angular/router";
import { Assets } from "src/app/enums/assets.enum";
import { ICard } from "src/app/interfaces/ICard.interface";
import { ImageViewService } from "src/app/services/image-view.service";

@Component({
  selector: "app-modal-window",
  templateUrl: "./modal-window.component.html",
  styleUrls: ["./modal-window.component.scss"],
})
export class ModalWindowComponent implements OnInit {
  painting!: ICard;
  enlargeSymbol = Assets.enlargeSymbol;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: ICard,
    private router: Router,
    private imageView: ImageViewService
  ) {}

  ngOnInit(): void {
    this.painting = this.data;
  }

  makeEnquiry() {
    const paintingData: NavigationExtras = {
      state: {
        ...this.painting,
      },
    };
    this.router.navigate(["/about/contact-me"], paintingData);
  }

  openImageView() {
    this.imageView.setImage(this.painting.imageUrl, this.painting.imageAltTxt);
    this.imageView.switchDisplay(true);
  }
}
