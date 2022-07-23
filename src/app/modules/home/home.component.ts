import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ICard } from "src/app/interfaces/ICard.interface";
import { GalleryService } from "src/app/services/gallery.service";
import { LoaderService } from "src/app/services/loader.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  featured: ICard[] = [];
  allPaintings: ICard[] = [];

  constructor(
    private galleryService: GalleryService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.setLoading(true);
    this.subscriptions.push(
      this.galleryService.getAllPaintings().subscribe((paintings: ICard[]) => {
        paintings.forEach((painting) => {
          if (painting.isFeatured) {
            this.featured.push(painting);
          } else {
            this.allPaintings.push(painting);
          }
        });
        this.loaderService.setLoading(false);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
