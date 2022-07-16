import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IImageView } from "../interfaces/imageView.interface";

@Injectable({
  providedIn: "root",
})
export class ImageViewService {
  private imageToggler$ = new BehaviorSubject<boolean>(false);
  private imageUrl$ = new BehaviorSubject<IImageView>({} as IImageView);
  imageView$ = this.imageToggler$.asObservable();
  image$ = this.imageUrl$.asObservable();

  switchDisplay(display: boolean) {
    this.imageToggler$.next(display);
  }

  setImage(imageUrl: string, imageAlt: string) {
    this.imageUrl$.next({ imageUrl, imageAlt });
  }
}
