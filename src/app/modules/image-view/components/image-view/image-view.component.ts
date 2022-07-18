import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ImageViewService } from "src/app/services/image-view.service";

@Component({
  selector: "app-image-view",
  templateUrl: "./image-view.component.html",
  styleUrls: ["./image-view.component.scss"],
})
export class ImageViewComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  view!: boolean;
  image!: string;
  imageAlt!: string;

  constructor(private imageViewService: ImageViewService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.imageViewService.imageView$.subscribe((view) => {
        this.view = view;
      })
    );
    this.subscriptions.push(
      this.imageViewService.image$.subscribe((image) => {
        this.image = image.imageUrl;
        this.imageAlt = image.imageAlt;
      })
    );
  }

  closeImageView() {
    this.imageViewService.switchDisplay(false);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
