import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { PageTitles } from "src/app/enums/page-titles.enum";
import { ICard } from "src/app/interfaces/card.interface";
import { GalleryService } from "src/app/services/gallery.service";
import { TitleService } from "src/app/services/title.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit, OnDestroy {
  isAdmin!: boolean;
  paintings: ICard[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private galleryService: GalleryService,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.userService.isAdmin();
    this.titleService.setTitle(PageTitles.gallery);
    this.subscriptions.push(
      this.galleryService.getAllPaintings().subscribe((paintings: ICard[]) => {
        paintings.forEach((painting) => {
          this.paintings.push(painting);
        });
      })
    );
  }

  navigateToAdd() {
    this.router.navigate(["/gallery/add"]);
  }

  navigateToEdit(painting: ICard) {
    this.router.navigate([`/gallery/edit/${painting._id}`]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
