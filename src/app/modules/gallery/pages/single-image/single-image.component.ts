import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ICard } from "src/app/interfaces/card.interface";
import { GalleryService } from "src/app/services/gallery.service";

@Component({
  selector: "app-single-image",
  templateUrl: "./single-image.component.html",
  styleUrls: ["./single-image.component.scss"],
})
export class SingleImageComponent implements OnInit, OnDestroy {
  painting: ICard = {} as ICard;
  paintingId = "";
  subscriptions: Subscription[] = [];

  constructor(
    private galleryService: GalleryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.paintingId = this.activatedRoute.snapshot.paramMap.get("id") ?? "";
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.galleryService.getPainting(this.paintingId).subscribe((painting) => {
        this.painting = painting;
        this.painting.dateCreated = painting.dateCreated.split("T")[0];
      })
    );
  }

  makeEnquiry() {
    const paintingData: NavigationExtras = {
      state: {
        ...this.painting,
      },
    };

    this.router.navigate(["about/contact-me"], paintingData);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
