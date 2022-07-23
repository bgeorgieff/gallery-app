import { Component, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { findIndex, Subscription } from "rxjs";
import { Assets } from "src/app/enums/assets.enum";
import { Classes } from "src/app/enums/classes.enum";
import { MessageType } from "src/app/enums/message-types.enum";
import { PageTitles } from "src/app/enums/page-titles.enum";
import { ICard } from "src/app/interfaces/ICard.interface";
import { GalleryService } from "src/app/services/gallery.service";
import { ImageViewService } from "src/app/services/image-view.service";
import { LoaderService } from "src/app/services/loader.service";
import { TitleService } from "src/app/services/title.service";
import { ToastrService } from "src/app/services/toastr.service";
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
    private titleService: TitleService,
    private renderer: Renderer2,
    private loaderService: LoaderService,
    private imageViewService: ImageViewService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.loaderService.setLoading(true);
    this.isAdmin = this.userService.isAdmin();
    this.titleService.setTitle(PageTitles.gallery);
    this.subscriptions.push(
      this.galleryService.getAllPaintings().subscribe({
        next: (paintings: ICard[]) => {
          paintings.forEach((painting) => {
            this.paintings.push(painting);
          });
        },
      })
    );
  }

  stopLoading() {
    this.loaderService.setLoading(false);
  }

  onIntersection({
    target,
    visible,
  }: {
    target: Element;
    visible: boolean;
  }): void {
    if (visible) this.renderer.addClass(target, Classes.cardAnimationClass);
  }

  viewPainting(painting: ICard) {
    this.router.navigate([`/gallery/painting/${painting._id}`]);
  }

  openPaintingView(painting: ICard) {
    this.imageViewService.setImage(painting.imageUrl, painting.imageAltTxt);
    this.imageViewService.switchDisplay(true);
  }

  navigateToAdd() {
    this.router.navigate(["/gallery/add"]);
  }

  navigateToEdit(painting: ICard) {
    this.router.navigate([`/gallery/edit/${painting._id}`]);
  }

  deletePainting(painting: ICard) {
    const id = painting._id || "";
    this.subscriptions.push(
      this.galleryService.deletePainting(id).subscribe({
        next: (response) => {
          this.paintings = this.paintings.filter(
            (painting) => painting._id !== id
          );
          const { message } = response;
          this.toastrService.showMessage(message, MessageType.success);
        },
        error: (error) => {
          throw new Error(error);
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
